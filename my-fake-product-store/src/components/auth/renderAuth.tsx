import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../interfaces';

interface ComposedComponentProps {
  isUserAuthenticated: boolean;
}

export default (ChildComponent: any): any => {
  class ComposedComponent extends Component<ComposedComponentProps> {
    state = { render: false };

    shouldRender() {
      if (this.props.isUserAuthenticated) {
        if (!this.state.render) {
          this.setState({ render: true });
        }
      } else {
        if (this.state.render) {
          this.setState({ render: false });
        }
      }
    }

    componentDidMount(): void {
      this.shouldRender();
    }

    componentDidUpdate(): void {
      this.shouldRender();
    }

    render() {
      if (this.state.render) {
        return <ChildComponent {...this.props} />;
      }

      return null;
    }
  }

  const mapStateToProps = (state: AppState) => {
    return {
      isUserAuthenticated:
        state.authState?.token !== '' && state.authState?.userInfo?.id !== '',
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

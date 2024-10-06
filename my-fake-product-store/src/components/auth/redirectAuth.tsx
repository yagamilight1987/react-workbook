import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppState } from '../../interfaces';

interface ComposedComponentProps {
  isUserAuthenticated: boolean;
}

export default (ChildComponent: any): any => {
  class ComposedComponent extends Component<ComposedComponentProps> {
    state = { redirect: false };

    shouldRender() {
      if (!this.props.isUserAuthenticated && !this.state.redirect) {
        this.setState({ redirect: true });
      }
    }

    componentDidMount(): void {
      this.shouldRender();
    }

    componentDidUpdate(): void {
      this.shouldRender();
    }

    render() {
      if (this.state.redirect) {
        return <Navigate to="/auth/login" />;
      }

      return <ChildComponent {...this.props} />;
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

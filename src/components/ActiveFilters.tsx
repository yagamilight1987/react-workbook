import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../interfaces';
import { changeFilter } from '../actions';

interface ActiveFiltersProps {
  filters?: { [key: string]: string };
  changeFilter: (filterType: string, filterValue: string) => void;
}

class ActiveFilters extends Component<ActiveFiltersProps> {
  handleDeleteFilter(filterType: string) {
    this.props.changeFilter(filterType, '');
  }

  render() {
    const { filters } = this.props;
    if (!filters) {
      return '';
    }
    return (
      <ul className="flex items-center">
        {Object.entries(filters).map(
          ([key, value]) =>
            key &&
            value && (
              <li key={key} className="text-lg flex items-center">
                <span className="capitalize">{key}:</span>{' '}
                <button
                  onClick={() => this.handleDeleteFilter(key)}
                  className=" bg-white rounded-xl py-2 px-4 ml-4"
                >
                  <span className="text-zinc-600 text-bold tracking-wider capitalize">
                    {value}
                  </span>
                  <span className="text-sm text-zinc-400 ml-2">X</span>
                </button>
              </li>
            )
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return { filters: state.productState.filters };
};

const mapDispatchToProps = {
  changeFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveFilters);

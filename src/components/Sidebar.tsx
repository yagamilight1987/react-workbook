import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../interfaces';
import { changeFilter, changeSort, getCategories } from '../actions';

interface SidebarProps {
  categories?: Array<string>;
  filter?: string;
  sort?: string;
  getCategories: () => void;
  changeFilter: (filter: string) => void;
  changeSort: (sort: string) => void;
}

class Sidebar extends Component<SidebarProps> {
  
  componentDidMount(): void {
    this.props.getCategories();
  }

  handleCategoryChange = (category: string) => {
    this.props.changeFilter(category);
  };

  handleSortChange = (event: any) => {
    this.props.changeSort(event.target.value);
  };

  render() {
    const { categories, filter, sort } = this.props;
    return (
      <div className="p-4 w-64 border-zinc-600 border-r-2">
        <h2 className="font-bold text-lg mb-4">Filter by Category</h2>
        <div className="mb-4">
          {categories?.map((category) => (
            <label key={category} className="block">
              <input
                type="radio"
                checked={filter === category}
                onChange={() => this.handleCategoryChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>

        <h2 className="font-bold text-lg mb-4">Sort by</h2>
        <div>
          <label className="block">
            <input
              type="radio"
              value="asc"
              checked={sort === 'asc'}
              onChange={this.handleSortChange}
              className="mr-2"
            />
            Ascending
          </label>
          <label className="block">
            <input
              type="radio"
              value="desc"
              checked={sort === 'desc'}
              onChange={this.handleSortChange}
              className="mr-2"
            />
            Descending
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    categories: state.categories,
    filter: state.productState.filter,
    sort: state.productState.sort,
  };
};

const mapDispatchToProps = {
  getCategories: getCategories,
  changeFilter: changeFilter,
  changeSort: changeSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

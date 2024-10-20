import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../interfaces';
import { changeFilter, changeSort, getCategories } from '../actions';

interface SidebarProps {
  categories?: Array<string>;
  filters?: { [key: string]: string };
  sort?: string;
  getCategories: () => void;
  changeFilter: (
    filterType: string,
    filterValue: string,
    isOffline?: boolean
  ) => void;
  changeSort: (sort: string) => void;
}

class Sidebar extends Component<SidebarProps> {
  componentDidMount(): void {
    this.props.getCategories();
  }

  handleCategoryChange = (category: string) => {
    this.props.changeFilter('category', category);
  };

  handleRatingChange(rating: string) {
    this.props.changeFilter('rating', rating, true);
  }

  handleSortChange = (event: any) => {
    this.props.changeSort(event.target.value);
  };

  renderCategoryFilter() {
    const { categories, filters } = this.props;
    const categoryFilter = filters ? filters['category'] : '';

    return (
      <>
        <h2 className="font-bold text-lg mb-4">Filter by Category</h2>
        <div className="mb-4">
          {categories?.map((category: string) => (
            <label key={category} className="block capitalize">
              <input
                type="radio"
                checked={categoryFilter === category}
                onChange={() => this.handleCategoryChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </>
    );
  }

  renderRatingFilter() {
    const { filters } = this.props;
    const ratingFilter = filters ? filters['rating'] : '';
    const ratings = ['1 star', '2 star', '3 star', '4 star and above'];

    return (
      <>
        <h2 className="font-bold text-lg mb-4">Filter by Rating</h2>
        <div className="mb-4">
          {ratings.map((rating) => (
            <label key={rating} className="block">
              <input
                type="radio"
                checked={ratingFilter === rating}
                onChange={() => this.handleRatingChange(rating)}
                className="mr-2"
              />
              {rating}
            </label>
          ))}
        </div>
      </>
    );
  }

  renderSortOptions() {
    const { sort } = this.props;
    return (
      <>
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
      </>
    );
  }

  render() {
    return (
      <>
        {this.renderCategoryFilter()}
        {this.renderRatingFilter()}
        {this.renderSortOptions()}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    categories: state.categories,
    filters: state.productState.filters,
    sort: state.productState.sort,
  };
};

const mapDispatchToProps = {
  getCategories: getCategories,
  changeFilter: changeFilter,
  changeSort: changeSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

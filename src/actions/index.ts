import axios, { AxiosResponse } from 'axios';
import {
  CHANGE_FILTER,
  CHANGE_SORT,
  FETCH_CATEGORIES,
  GET_PRODUCTS,
} from './types';
import { Dispatch } from 'redux';
import { AppState } from '@/interfaces';

export const getProducts =
  (): any => async (dispatch: Dispatch, getState: () => any) => {
    let url = 'https://fakestoreapi.com/products';
    const state: AppState = getState();
    const filter = state.productState.filter;
    const sort = state.productState.sort;

    console.log(filter, sort);

    if (filter) {
      url = `${url}/category/${filter}`;
    }

    if (sort) {
      url = `${url}?sort=${sort}`;
    }
    const response: AxiosResponse = await axios.get(url);

    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  };

export const getCategories = (): any => async (dispatch: Dispatch) => {
  const response = await axios('https://fakestoreapi.com/products/categories');

  dispatch({
    type: FETCH_CATEGORIES,
    payload: response.data,
  });
};

export const changeFilter =
  (filter: string): any =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_FILTER,
      payload: filter,
    });

    dispatch(getProducts());
  };

export const changeSort =
  (sort: string): any =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_SORT,
      payload: sort,
    });

    dispatch(getProducts());
  };

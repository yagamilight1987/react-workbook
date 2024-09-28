import axios, { AxiosResponse } from 'axios';
import {
  CHANGE_FILTER,
  CHANGE_SORT,
  ERROR_PRODUCTS,
  FETCH_CATEGORIES,
  GET_LOCAL_PRODUCTS,
  GET_PRODUCTS,
  LOADING_PRODUCTS,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
} from './types';
import { Dispatch } from 'redux';
import { AppState } from '@/interfaces';

export const getProducts =
  (): any => async (dispatch: Dispatch, getState: () => any) => {
    dispatch(setLoading(true));

    try {
      let url = 'https://fakestoreapi.com/products';
      const state: AppState = getState();
      const filters = state.productState.filters;
      const filter = filters ? filters['category'] : '';
      const sort = state.productState.sort;

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
    } catch (error: any) {
      dispatch({
        type: ERROR_PRODUCTS,
        payload: error.message,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

export const getLocalProducts =
  (): any => (dispatch: Dispatch, getState: () => any) => {
    const state: AppState = getState();
    const filters = state.productState.filters;
    const filter = filters ? filters['rating'] : '';
    if (filter) {
      dispatch({
        type: GET_LOCAL_PRODUCTS,
        payload: state.productState.master?.filter(
          (product) =>
            Math.floor(product.rating.rate) === Number(filter.substr(0, 1))
        ),
      });
    }
  };

export const getCategories = (): any => async (dispatch: Dispatch) => {
  const response = await axios('https://fakestoreapi.com/products/categories');

  dispatch({
    type: FETCH_CATEGORIES,
    payload: response.data,
  });
};

export const changeFilter =
  (filterType: string, filterValue: string, isOffline = false): any =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_FILTER,
      payload: { filterType, filterValue },
    });

    if (!isOffline) {
      await dispatch(getProducts());
    }

    dispatch(getLocalProducts());
  };

export const changeSort =
  (sort: string): any =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_SORT,
      payload: sort,
    });

    await dispatch(getProducts());

    dispatch(getLocalProducts());
  };

export const setLoading =
  (value: boolean): any =>
  (dispatch: Dispatch) => {
    dispatch({
      type: LOADING_PRODUCTS,
      payload: value,
    });
  };

export const setError =
  (message: string): any =>
  (dispatch: Dispatch) => {
    dispatch({
      type: ERROR_PRODUCTS,
      payload: message,
    });
  };

export const loginUser =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        'https://fakestoreapi.com/auth/login',
        JSON.stringify({ username, password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: error.message,
      });
    }
  };

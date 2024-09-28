export interface AppState {
  productState: ProductState;
  categories: Array<string>;
  authState: AuthState;
}

export interface ProductState {
  master?: Product[];
  products?: Product[];
  filters?: { [key: string]: string };
  sort?: string;
  loading?: boolean;
  error?: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface IActionCreator {
  type: string;
  payload: any;
}

export interface AuthState {
  token?: string;
  error?: string;
  username?: string;
}

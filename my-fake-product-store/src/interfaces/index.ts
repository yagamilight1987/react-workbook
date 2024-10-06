export interface AppState {
  productState: ProductState;
  categories: Array<string>;
  authState: AuthState;
  cartState: CartState;
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
  userInfo?: UserInfo;
}

export interface UserInfo {
  id?: string;
  email?: string;
  username?: string;
  password?: string;
  name?: NameInfo;
  address?: Address;
  phone?: string;
}

export interface NameInfo {
  firstname?: string;
  lastname?: string;
}

export interface Address {
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;
  geolocation?: Geolocation;
}

export interface GeoLocation {
  lat?: string;
  long?: string;
}

export interface CartState {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}

export type CartProduct = { productId: number; quantity: number };

export type CartListItemType = Product & CartProduct;

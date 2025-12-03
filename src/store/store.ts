// store/store.ts
import { Product } from '@/app/products/types/Product';
import { combineReducers, configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


interface CartState {
  items: CartProduct[];
}

const initialState: CartState = {
  items: [],
};

type CartProduct = Product & {
    quantity: number
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

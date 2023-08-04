import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { store } from "./store";

/**
 * A dispatch that is integrated with AppDispatch, so know user has a preview function that can be used
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * A selector that is integrated with RootState, so know user has a preview state
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Used in *.api.ts when accessing getState
 */
export type GetState = () => RootState;

/**
 * A wrapper to share the redux state, usually used in a layout
 */
export function ReduxToolkitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
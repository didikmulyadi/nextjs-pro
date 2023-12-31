import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './store'

import type { AppDispatch, RootState } from './store'

/**
 * Redux toolkit provider props
 */
interface IReduxToolkitProvider {
  /**
   * react component
   */
  children: React.ReactNode
}

/**
 * A dispatch that is integrated with AppDispatch, so know user has a preview function that can be used
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()

/**
 * A selector that is integrated with RootState, so know user has a preview state
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/**
 * Used in *.api.ts when accessing getState
 */
export type GetState = () => RootState

/**
 * A wrapper to share the redux state, usually used in a layout
 * @param {props} props is parameter that is contain a component
 */
export const ReduxToolkitProvider = (props: IReduxToolkitProvider) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}

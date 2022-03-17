import { createStore, applyMiddleware } from 'redux';
import { tradeReducer } from './tradeReducer';

// export const store = createStore(tradeReducer, applyMiddleware())

const  logger = (store: any) => (next: any) => (action: any) => {

    console.log('will dispatch', action)
    console.log('state before dispatch', store.getState())

  setTimeout(() => {
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', store.getState())
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue    
  }, 2000)

  }


export const store = createStore(tradeReducer, applyMiddleware(logger))


export type RootState = ReturnType<typeof store.getState>;
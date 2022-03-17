import { RootState } from './store';

export interface ITrade {
  amount: number;
  currency: string;
}

interface defaultType {
  trade: ITrade[];
}

interface tradeAction {
  type: string;
  payload?: any;
}

const defaultState: defaultType = {
  trade: [],
};
// console.log(defaultState);

export const tradeReducer = (state: defaultType = defaultState, action: tradeAction) => {
  switch (action.type) {
    case "OPEN_TRADE":
      return { ...state };
    case "ADD_TRADE":
      return { trade: [ ...state.trade, action.payload ] };
    default:
      return state;
  }
};

export const selectTrade = (state : RootState): ITrade[] => state.trade;
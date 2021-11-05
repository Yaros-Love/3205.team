import { ActionType } from "./action";


const initialState = {
  isDataLoaded: false,
  currentLanguage: 'rus',
  currentRates: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    case ActionType.LOAD_CURRENT_RATES:
      return {
        ...state,
        currentRates: action.payload,
      }  
  }
  return state;
}

export {reducer};
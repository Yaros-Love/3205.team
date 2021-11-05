import { ActionType } from "./action";


const initialState = {
  isDataLoaded: false,
  currentLanguage: 'rus',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
  }
  return state;
}

export {reducer};
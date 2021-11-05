export const ActionType = {
  SET_CURRENT_LANGUAGE: `language/setCurrentLanguage`,
};

export const ActionCreator = {
  setCurrentLanguage: (newLanguage) => ({
    type: ActionType.SET_CURRENT_LANGUAGE,
    payload: newLanguage,
  }),
};
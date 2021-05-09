const initialState = {
  items: [],
};

const templates = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEMPLATES':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default templates;

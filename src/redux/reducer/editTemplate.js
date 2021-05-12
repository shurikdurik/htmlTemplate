const initialState = {
  selectedItem: [],
};

const editTemplate = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_TEMPLATE':
      return {
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

export default editTemplate;

import axios from 'axios';

export const fetchTemplates = () => (dispatch) => {
  axios.get('http://localhost:3001/templates').then(({ data }) => dispatch(setTemplates(data)));
};

export const setTemplates = (items) => ({
  type: 'SET_TEMPLATES',
  payload: items,
});

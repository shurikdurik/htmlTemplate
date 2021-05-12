import axios from 'axios';

export const fetchTemplates = () => (dispatch) => {
  axios.get('http://localhost:3001/templates').then(({ data }) => dispatch(getTemplates(data)));
};

export const getTemplates = (items) => ({
  type: 'GET_TEMPLATES',
  payload: items,
});

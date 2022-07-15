
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH-REQUEST':
      return { ...state, loading: true };
    case 'FETCH-SUCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FEACH-FALE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default reducer
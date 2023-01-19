const initialData = {
  List: [],
};
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        List: [
          ...state.List,
          {
            id,
            data,
          },
        ],
      };
    default:
      return state;
  }
};
export default todoReducers;

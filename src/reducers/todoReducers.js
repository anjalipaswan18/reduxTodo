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
    case "DELETE_TODO":
      const newList = state.List.filter((elem) => elem.id !== action.payload);
      console.log(action.payload);
      return {
        ...state,
        List: newList,
      };
    default:
      return state;
  }
};
export default todoReducers;

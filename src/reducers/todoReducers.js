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
      return {
        ...state,
        List: newList,
      };
    case "EDIT_TODO":
      const { editId, newData } = action.payload;
      const updatedList = state.List.map((elem) => {
        console.log(editId);
        if (elem.id === editId) {
          return {
            id: editId,
            newData: newData,
          };
        } else {
          return elem;
        }
      });
      return {
        ...state,
        List: updatedList,
      };
    default:
      return state;
  }
};
export default todoReducers;

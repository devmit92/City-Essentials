const businessesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BUSINESSES':
        return action.payload;
      case 'UNSET_BUSINESSES':
        return [];
      default:
        return state;
    }
  };

  export default businessesReducer;
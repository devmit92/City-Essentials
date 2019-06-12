const likesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LIKES':
        // return state;
        console.log('HERE IS THE REDUCER INFO: ', action.payload);
        return action.payload;
      case 'UNSET_LIKES':
        return [];
      default:
        return state;
    }
  };

  export default likesReducer;
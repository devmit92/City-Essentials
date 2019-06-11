const communityReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMMUNITY':
        // return state;
        console.log('HERE IS THE REDUCER INFO: ', action.payload);
        return action.payload;
      case 'UNSET_COMMUNITY':
        return [];
      default:
        return state;
    }
  };

  export default communityReducer;
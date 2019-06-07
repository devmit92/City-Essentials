const communityReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMMUNITY':
        return action.payload;
      case 'UNSET_COMMUNITY':
        return [];
      default:
        return state;
    }
  };

  export default communityReducer;
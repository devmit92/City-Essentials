const topFiveReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FIVE':
        return action.payload;
      case 'UNSET_FIVE':
        return [];
      default:
        return state;
    }
  };

  export default topFiveReducer;
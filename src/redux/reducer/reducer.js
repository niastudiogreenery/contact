let initialState = {
    contactList: []  // Initial empty contact list
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_CONTACT":
        return {
          ...state,
          contactList: [
            ...state.contactList,
            {
              name: action.payload.name,
              phoneNumber: action.payload.phoneNumber,
            },
          ],
        };
      default:
        return state;  // Return unchanged state for unrecognized actions
    }
  }
  
  export default reducer;
  
  
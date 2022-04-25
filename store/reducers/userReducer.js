
const initialState = {
     loggedIn:false,
     activeUser:{},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      state.loggedIn = true
      state.activeUser  =  action.payload
      return state
    default:
      return state;
  }

};



export default userReducer;

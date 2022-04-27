
const initialState = {
     authToken:null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
     
      return {
        ...state, //copy all previuos states
        authToken:action.payload
    }
   
    default:
      return state;
  }

};



export default userReducer;

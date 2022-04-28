
const initialState = {
     userToken:null,
     userData:{},
     
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case "LOGIN":
     
      return {
        ...state, //copy all previuos states
        userToken:action.payload.token,
       
    }

    case "GET_USER_INVOICES" : 
    return{
      ...state,
       userData: action.payload
    }

   
    default:
      return state;
  }

};



export default userReducer;

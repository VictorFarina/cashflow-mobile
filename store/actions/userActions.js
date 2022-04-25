import userReducer from "../reducers/userReducer";
import actiontypes from "../actionTypes";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    const res = await fetch("https://v5.cashflow.do/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        domain: "Pruebaniurkysmichelle",
        username: email,
        password: password,
      }),
    });
    const result = await res.json();

    

    result.error ? console.log(result.error) : dispatch({type:'LOG_IN',payload:result})

    


  };
};
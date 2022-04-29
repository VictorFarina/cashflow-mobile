import userReducer from "../reducers/userReducer";
import actiontypes from "../actionTypes";
import {useSelector} from "react-redux";

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

    if (result.token) {
      dispatch({
        type: "LOGIN",
        payload: result,
      }).then(dispatch(getUserInvoices(result.token)))
    } else {
      dispatch(console.log(result.error));
    }
  };
  
};

export const getUserInvoices = (token) => {
  return async (dispatch) => {
    const res = await fetch("https://v5.cashflow.do/api/v1/invoices", {
      method: "GET",
      headers: {
              'Content-Type': 'application/json',
               Authorization: 'Bearer '+token
            }
    });
    
    const result = await res.json();

    if (result.data) {
    dispatch({type:"GET_USER_INVOICES",payload:result.data})
    } else {
     dispatch(console.log(result.error));
    }

   
  };
  
};


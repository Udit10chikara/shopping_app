import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Auth0Provider } from "@auth0/auth0-react";
import {createStore} from 'redux';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
const initialState = {totalAmount:0,totalItem: 0,cartData:[]};
function reducer(state =initialState,actions){
  //console.log(state.cartData);
  switch(actions.type){
    case 'INC': 
     const updatecart = state.cartData.map((cart) => {
        if(cart.id === actions.payload){
          var  totalAmount = totalAmount;
           return { ...cart, quantity: cart.quantity + 1}
        }
        return cart;
      })
      return {...state, cartData: updatecart }

    case 'DEC': 
       const deletecart = state.cartData.map((cart) => {
         if(cart.id === actions.payload){
           return { ...cart, quantity: cart.quantity - 1 };
         }
         return cart;
       }).filter((cart) => cart.quantity !==0);
       return {...state, cartData: deletecart }
       
   case 'ADDCART' : 
          return {...state,cartData:[...state.cartData,actions.payload]}
          

    case 'DLT': 
    return {
      ...state,
      cartData: state.cartData.filter((curElem) => {
        return curElem.id !== actions.payload;
        
      }),
      
      
    }

    case 'total':
      let { totalItem, totalAmount } = state.cartData.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
  
          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;
  
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };

    default : return state;
  }

}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'INC',payload:2})
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain="dev-zoe5pfz5.us.auth0.com"
    clientId="cLoIZufAT0DVW0Gt7BLkmcnAnrZvDFun"
    redirectUri={window.location.origin}
  > */}
    <Provider store={store}>
    <App />
    </Provider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

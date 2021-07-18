import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const defaultState = 0

const DEPOSIT_MONEY = "DEPOSIT_MONEY"
const WITHDRAW_MONEY = "WITHDRAW_MONEY"

function turnReducer(state=defaultState,action){
  switch(action.type){
    case DEPOSIT_MONEY:
      return state + action.payload.amount;
    case WITHDRAW_MONEY:
      return state - action.payload.amount;
    default:
      return state
  }
}

const store = createStore(turnReducer,composeWithDevTools)
console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState());
});


store.dispatch(
  {
    type: DEPOSIT_MONEY,
    payload: {
      amount: 500
    }
  }
)

store.dispatch(
  {
    type: DEPOSIT_MONEY,
    payload:{
      amount: 1000
    }
  }
)

store.dispatch(
  {
    type: WITHDRAW_MONEY,
    payload:{
      amount: 100
    }
  }
)




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

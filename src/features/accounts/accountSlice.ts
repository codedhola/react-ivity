import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false
}

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount: any, currency: any) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch: any, getState: any) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;

/*
export default function accountReducer(state: any = initialStateAccount, action: any){
  console.log("loan ", state.loan)
  switch(action.type){
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload }
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload }
    case "account/requestLoan":
      if(state.loan) return state
      return { ...state, loanPurpose: action.payload.loanPurpose, loan: action.payload.loan, balance: state.balance + action.payload.loan }
    case "account/payLoan":
      return { ...state, 
        loan: state.loan - action.payload,
        balance: state.balance - action.payload
      }
    case "account/convertingCurrency":
      return { ...state, isLoading: true }
    default: 
      return state
  }
}
export function deposit(amount: number, currency: string){
  if(currency === "USD")return {
    type: "account/deposit",
    payload: amount
  }

  return async function(dispatch: any, state: any){
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    console.log("DATA => ", data)
    const converted = data.rates?.USD;

    dispatch({ type: "account/deposit", payload: converted });
  }
}

export function withdraw(amount: number){
  return {
    type: "account/withdraw",
    payload: amount
  }
}

export function requestLoan(amount: number, loanPurpose: string){
  return {
    type: "account/requestLoan",
    payload: { loan: amount, loanPurpose}
  }
}

export function payLoan(amount: number){
  return {
    type: "account/payLoan",
    payload: amount
  }
}

*/
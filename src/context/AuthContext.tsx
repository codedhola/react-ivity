import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext<null | any>(null);

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userDetails = {
  email: "hola",
  password: "***",
  name: "coded hola",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return initialState;
    default:
      throw new Error("Unknow action type");
  }
}
function AuthProvider({ children }: any) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email: string, password: string) {
    console.log("LOGIN => ", isAuthenticated);
    if (email === userDetails.email && password === userDetails.password) {
      dispatch({ type: "login", payload: userDetails });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        login: login,
        logout,
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Context was used outside");
  return context;
}

export { AuthProvider, useAuth };

import React, { createContext, useReducer } from "react";
import axios from "../service/axios";
import { apiPathReturn } from "../utils/constants/apiConstant";

export const APIPath = apiPathReturn(); //* tüm apiler

const initialStates = {
  loading: false,
};

const StateReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_BEFORE":
      return {
        ...state,
        loading: action.payload.loading,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

const ApiContext = createContext(initialStates);

function ApiProvider({ children }) {
  const [state, dispatch] = useReducer(StateReducer, initialStates);

  const httpRequest = async (
    method,
    path,
    data = {},
    options = {
      showLoading: true,
      headers: {},
    }
  ) => {
    let res = {
      data: {
        isSuccess: false,
      },
    };
    try {
      dispatch({
        type: "REQUEST_BEFORE",
        payload: {
          loading: options.showLoading || state.loading,
        },
      });
      res = await axios[method](path, data, { headers: options.headers });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: "LOADING",
        payload: {
          loading: false,
        },
      });

      return res.data;
    }
  };

  const postData = async (
    path,
    data = {},
    options = {
      showLoading: true,
      headers: {},
    }
  ) => {
    return httpRequest("post", path, data, options);
  };

  const getData = async (
    path,
    data = {},
    options = {
      showLoading: true,
    }
  ) => {
    return httpRequest("get", path, data, options);
  };

  return (
    <ApiContext.Provider
      value={{
        ...state,
        APIPath,
        postData,
        getData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export { ApiContext, ApiProvider };

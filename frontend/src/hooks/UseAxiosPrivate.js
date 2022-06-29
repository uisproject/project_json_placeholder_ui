import { useEffect } from "react";
import { privateInstance } from "../api/api";
import { UseSelectAuth } from "../features/authSlice";

const UseAxiosPrivate = () => {
  const authData = UseSelectAuth();

  useEffect(() => {
    const InterceptRequest = privateInstance.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = authData.accessToken;
        return config;
      }
    );

    const InterceptResponse = privateInstance.interceptors.response.use(
      (response) => {
        return response;
      }
    );

    return () => {
      privateInstance.interceptors.request.eject(InterceptRequest);
      privateInstance.interceptors.response.eject(InterceptResponse);
    };
  }, [authData]);

  return privateInstance;
};

export default UseAxiosPrivate;

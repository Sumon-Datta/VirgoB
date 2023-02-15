import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  window.fbAsyncInit = function () {
    window.FB.init({
      appId: process.env.REACT_APP_FACEBOOK_APP_ID,
      cookie: true,
      xfbml: true,
      version: "v9.0",
    });
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      // console.log(codeResponse);
      setLoading(true);
      const response = await axios.post(
        "https://virgobackend.onrender.com/api/auth/google",
        {
          code: codeResponse.code,
        }
      );

      setUser(response.data.data.user);
      localStorage.setItem("accessToken", response.data.data.token);
      setLoading(false);
    },
    onError: (errorResponse) => {
      console.log(errorResponse);
      setLoading(false);
    },
  });

  const facebookLogin = () => {
    setError("");
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          // The user is logged in and has authorized your app
          // You can now use the access token to authenticate the user on your server
          const postUser = async () => {
            setLoading(true);
            const res = await axios.post(
              "https://virgobackend.onrender.com/api/auth/facebook",
              {
                access_token: response.authResponse.accessToken,
              }
            );

            setUser(res.data.data.user);
            localStorage.setItem("accessToken", res.data.data.token);
            setLoading(false);
          };

          postUser();
        } else {
          // The user cancelled the login
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  const signupWithEmail = async ({ name, email, password, phone }) => {
    setError("");
    try {
      const info = { name, email, password, phone };
      setLoading(true);
      const res = await axios.post(
        `https://virgobackend.onrender.com/api/auth/signup`,
        info
      );

      setUser(res.data.data.user);
      setLoading(false);
      localStorage.setItem("accessToken", res.data.data.token);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }

      setLoading(false);
    }
  };

  const signIn = async (phone, password) => {
    setLoading(true);
    setError("");
    try {
      const info = { phone, password };
      const res = await axios.post(
        `https://virgobackend.onrender.com/api/auth/login`,
        info
      );

      setUser(res.data.data.user);
      localStorage.setItem("accessToken", res.data.data.token);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  const updateUserInfo = async (info) => {
    try {
      const res = await axios.patch(
        `https://virgobackend.onrender.com/api/auth/updateUser/${user._id}`,
        info,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setUser(res.data.data);
      return res;
    } catch (error) {
      return error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    const tkn = localStorage.getItem("accessToken");
    if (tkn) {
      const getUser = async () => {
        setLoading(true);
        try {
          const res = await axios.get(
            `https://virgobackend.onrender.com/api/auth/user`,
            {
              headers: { authorization: `Bearer ${tkn}` },
            }
          );
          setUser(res.data.data.user);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };
      getUser();
    } else {
      setLoading(false);
    }
    return () => {};
  }, []);

  const authInfo = {
    signupWithEmail,
    googleLogin,
    facebookLogin,
    signIn,
    logout,
    user,
    loading,
    error,
    updateUserInfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

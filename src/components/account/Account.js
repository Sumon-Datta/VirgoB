import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import LoadingBar from "../LoadingBar/LoadingBar";
import "./Account.css";

const Account = () => {
  const [register, setRegister] = useState(true);
  const {
    user,
    loading,
    googleLogin,
    facebookLogin,
    signupWithEmail,
    signIn,
    error,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = useLocation()?.state?.from || "/";
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate, from]);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!isPhoneValid)
      return toast.error(
        "Please provide a valid phone number eg: 01XXXXXXXXXX"
      );

    const info = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(info);
    signupWithEmail(info);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    signIn(phone, password);
  };
  const handleValidPhone = (e) => {
    const value = e.target.value;
    if (/(^(\+01|01|01|01))[1|3-9]{1}(\d){8}$/.test(value)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };
  return (
    <>
      {loading && <LoadingBar />}
      <div className="container">
        <div className="row">
          <div className="signlog  col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="button-one">
              <button className="button " onClick={() => setRegister(true)}>
                Login
              </button>
            </div>

            <div className="button-two">
              <button className="button" onClick={() => setRegister(false)}>
                Register
              </button>
            </div>
          </div>

          <div className="form-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {register ? (
              // login

              <div className="logIn">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-check check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Keep me logged in
                    </label>
                  </div>

                  <div className="col-md-12 text-center login-btn">
                    <button className="btn btn-primary">Login Now</button>
                  </div>
                  {error && <p className="text-danger ">{error}</p>}
                  <div className="forget-pass w-100 text-center d-flex justify-content-center mt-3">
                    <button className="text-center bg-white">
                      Forget Your Password
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    onChange={handleValidPhone}
                    className="form-control"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="col-md-12 text-center login-btn">
                  <button className="btn btn-primary">Create Account</button>
                </div>

                {error && <p className="text-danger mt-3">{error}</p>}
                <div className="term w-100 text-left">
                  <p>
                    By continuing we will process your data, obtained through
                    your browsing on the website, to offer you content related
                    to your tastes, based on your interactions with the brand.
                    Bear in mind that you can oppose this treatment. You should
                    accept{" "}
                    <a
                      className="text-decoration-none"
                      href="https://www.virgobd.com/"
                    >
                      terms and policy
                    </a>{" "}
                    of https://www.virgobd.com
                  </p>
                </div>
              </form>
            )}
            <div className="googleFacebook d-flex justify-content-center text-center mt-3">
              <div className="google ">
                <button onClick={googleLogin} className="bg-white">
                  <img
                    src="https://dg19fhsjeexqh.cloudfront.net/web/images/miscellaneous/sign-in-with-google.jpeg"
                    alt=""
                  />
                </button>
              </div>
              <div className="facebook ">
                <button onClick={facebookLogin} className="bg-white">
                  <img
                    src="https://dg19fhsjeexqh.cloudfront.net/web/images/miscellaneous/sign-in-with-facebook.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

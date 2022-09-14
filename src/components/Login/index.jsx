import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../store/slices/loginSlice";
import Button from "../Button";
import CustomInput from "../CustomInput";
import { Content, Error, Wrapper } from "./style";

const Login = () => {
  const loginSlice = useSelector((state) => state.loginSlice);
  const { isSignIn, message } = loginSlice;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [validationErr, setValidationErr] = useState(false);
  const onInputChange = (e, name) => {
    setError(false);
    setData({ ...data, [name]: e.target.value });
  };

  useEffect(() => {
    if (message) setError(true);
    if (isSignIn) navigate("/main");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignIn, message]);

  const onSubmit = () => {
    if (!data.phoneNumber || !data.password) setValidationErr(true);
    else dispatch(signIn(data));
  };

  return (
    <Wrapper>
      <Content>
        <h3>Login</h3>
        <CustomInput
          label={"Phone Number"}
          name="phoneNumber"
          placeholder={"Enter phone number"}
          onInputChange={onInputChange}
          type="number"
          isError={validationErr && !data.phoneNumber}
        />
        <CustomInput
          label={"Password"}
          name="password"
          placeholder={"Enter password"}
          onInputChange={onInputChange}
          type="password"
          isError={validationErr && !data.password}
        />
        <h5>
          If you have not an account <Link to={"/signup"}>click here</Link>
        </h5>
        <Button text={"Login"} onClick={onSubmit} />
        {error && <Error>*{message}, try again</Error>}
      </Content>
    </Wrapper>
  );
};

export default Login;

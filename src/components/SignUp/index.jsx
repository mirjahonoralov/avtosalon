import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../store/slices/loginSlice";
import Button from "../Button";
import CustomInput from "../CustomInput";
import { Content, Error, Wrapper } from "./style";

const SignUp = () => {
  const loginSlice = useSelector((state) => state.loginSlice);
  const { isSignUp, message } = loginSlice;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    roleId: "631836e3e171de6c5c96186f",
  });
  const [validationErr, setValidationErr] = useState(false);
  const [error, setError] = useState(false);

  const onInputChange = (e, name) => {
    setError(false);
    setData({ ...data, [name]: e.target.value });
  };

  useEffect(() => {
    if (isSignUp) navigate("/main");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignUp]);

  const onSubmit = () => {
    if (!data.fullName || !data.phoneNumber || !data.password)
      setValidationErr(true);
    else dispatch(signUp(data));
  };

  return (
    <Wrapper>
      <Content>
        <h3>Create account</h3>
        <CustomInput
          label={"Full name"}
          name="fullName"
          placeholder={"Enter full name"}
          onInputChange={onInputChange}
          isError={validationErr && !data.fullName}
        />
        <CustomInput
          label={"Phone number"}
          name="phoneNumber"
          placeholder={"Enter phone number"}
          onInputChange={onInputChange}
          isError={validationErr && !data.phoneNumber}
          type="number"
        />
        <CustomInput
          label={"Password"}
          name="password"
          placeholder={"Enter password"}
          onInputChange={onInputChange}
          isError={validationErr && !data.password}
          type="password"
        />
        <h5>
          If you have an account <Link to={"/login"}>click here</Link>
        </h5>
        <Button text={"Crate account"} onClick={onSubmit} />
        {error && <Error>*{message}, try again</Error>}
      </Content>
    </Wrapper>
  );
};

export default SignUp;

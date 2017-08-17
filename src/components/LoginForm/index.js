import { h } from "preact";
import { LocalForm, Control } from "react-redux-form";
import styled from "styled-components";
import { connect } from "preact-redux";

const InputWrapper = styled.div`
  position: relative;
  margin: 8px 0;
`;

const Input = styled(Control.text)`
    position: relative;
    display: block;
    float: right;
    padding: 0.8em;
    border: none;
    border-radius: 0;
    font-weight: 400;
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    padding: 0.5em 0;
    margin-bottom: 2em;
    color: #4a4a4a;

    &:focus,
    &:valid { 
      outline: none; 

      & + label span {
        color: #FF8D65;
        transform: translate3d(0, 2em, 0) scale3d(0.655, 0.655, 1);
      }
    }

    & + label {
      width: 100%;
      position: absolute;
      text-align: left;
      font-size: 1em;
      padding: 10px 0 5px;
      display: inline-block;
      float: right;
      pointer-events: none;
      color: #696969;
      font-weight: bold;
      user-select: none;

      & > span {
        position: relative;
        display: block;
        width: 100%;
        padding: 0;
        transition: transform 0.3s, color 0.3s;
        transform-origin: 0 0;
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: #FF9666;
        left: 0;
        top: 100%;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        transition: transform 0.3s, background-color 0.3s;
      }
    }
`;

const Button = styled.input`
  background: #92c5ce;
  color: #352020;
  padding: 12px;
  border-radius: 2px;
  margin-top: 24px;
  font-size: 16px;
  margin-bottom: 0;
  font-weight: bold;
  border: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
  cursor: pointer;

  &:hover {
    outline: none;
    outline: none;
    background: #7cb9c3;
    color: #fff;
  }
`;

const LoginForm = props => {
  const handleSubmit = values =>
    props.dispatch({
      type: "LOGIN_USER",
      payload: values
    });

  return (
    <LocalForm onSubmit={values => handleSubmit(values)}>
      <InputWrapper>
        <Input
          type="email"
          model=".email"
          id="user.email"
          required
          validators={{
            required: val => val && val.length
          }}
        />
        <label htmlFor="user.email">
          <span>Email:</span>
        </label>
      </InputWrapper>
      <InputWrapper>
        <Input
          type="password"
          model=".password"
          id="user.password"
          required
          validators={{
            required: val => val && val.length
          }}
        />
        <label htmlFor="user.password">
          <span>Password:</span>
        </label>
      </InputWrapper>
      <Button model=".name" value="Login" type="submit" />
    </LocalForm>
  );
};

export default connect()(LoginForm);

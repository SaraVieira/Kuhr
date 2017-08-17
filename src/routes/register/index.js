import { h, Component } from "preact";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  FadeIn,
  SlideInRight,
  SlideInLeft
} from "animate-css-styled-components";
import { Tabs, TabItem } from "rebass";

import RegisterForm from "../../components/RegisterForm/";
import LoginForm from "../../components/LoginForm/";

const RegisterPage = styled.main`
  background: #ff9966; /* fallback for old browsers */
  background: linear-gradient(to right, #ff9966, #ff5e62);
  padding-top: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  background: #fff;
  width: 500px;
  max-width: 90%;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, .1);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 16px;
  overflow: hidden;

  & form {
    display: flex;
    flex-direction: column;
  }
`;

class Register extends Component {
  state = {
    login: false
  };

  handleSubmitRegister(values) {
    this.props.dispatch({
      type: "REGISTER_USER",
      payload: values
    });
  }

  render({}, { login }) {
    return (
      <RegisterPage>
        {this.props.user.loading
          ? <div>Loading...</div>
          : <Section>
              <FadeIn duration="0.4s">
                <Tabs>
                  <TabItem
                    onClick={() => this.setState({ login: false })}
                    active={!login}
                  >
                    Register
                  </TabItem>
                  <TabItem
                    onClick={() => this.setState({ login: true })}
                    active={login}
                  >
                    Login
                  </TabItem>
                </Tabs>
                {this.state.login
                  ? <SlideInRight duration="0.5s">
                      <LoginForm handleSubmit={() => console.log("asd")} />
                    </SlideInRight>
                  : <SlideInLeft duration="0.5s">
                      <RegisterForm handleSubmit={this.handleSubmitRegister} />
                    </SlideInLeft>}
              </FadeIn>
            </Section>}
      </RegisterPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Register);

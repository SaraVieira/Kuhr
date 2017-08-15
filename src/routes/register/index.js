import { h, Component } from "preact";
import { LocalForm, Control } from "react-redux-form";
import { connect } from "react-redux";
import styles from "./style";

class Register extends Component {
  handleChange(values) {
    console.log(values);
  }
  handleUpdate(form) {
    console.log(form);
  }
  handleSubmit(values) {
    this.props.dispatch({
      type: "REGISTER_USER",
      payload: values
    });
  }
  render() {
    const passwordsMatch = ({ password, confirmPassword }) => {
      return password === confirmPassword;
    };
    console.log(this.props.user);
    return (
      <div class={styles.home}>
        {this.props.user.loading
          ? <div>Loading...</div>
          : <LocalForm
              // onUpdate={form => this.handleUpdate(form)}
              // onChange={values => this.handleChange(values)}
              onSubmit={values => this.handleSubmit(values)}
              validators={{
                "": { passwordsMatch }
              }}
            >
              <label htmlFor="user.name">Name:</label>
              <Control.text
                model=".name"
                id="user.name"
                validators={{
                  required: val => val && val.length // ES6 property shorthand
                }}
              />
              <label htmlFor="user.email">Email:</label>
              <Control.text
                type="email"
                model=".email"
                id="user.email"
                validators={{
                  required: val => val && val.length
                }}
              />
              <label htmlFor="user.password">Password:</label>
              <Control.text
                type="password"
                model=".password"
                id="user.password"
                validators={{
                  required: val => val && val.length
                }}
              />
              <label htmlFor="user.confirmPassword">Repeat Password:</label>
              <Control.text
                type="password"
                model=".confirmPassword"
                id="user.confirmPassword"
                validators={{
                  required: val => val && val.length
                }}
              />
              <Control.text model=".name" value="Submit" type="submit" />
            </LocalForm>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Register);

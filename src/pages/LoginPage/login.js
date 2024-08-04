import React from 'react';
import '../../assets/css/styles.css';
import '../../assets/scss/_base.scss';
import '../../assets/scss/_breakpoints.scss';
import '../../assets/scss/_login.scss';
import '../../assets/scss/_variables.scss';
import '../../assets/scss/styles.scss';

export const Login = () => {
  return (
    <div className="login">
      <form action="" className="login__form">
        <h1 className="login__title">Login</h1>
        <div className="login__inputs">
          <div className="login__box">
            <input type="email" placeholder="Email ID" required className="login__input" />
            <i className="ri-mail-fill"></i>
          </div>
          <div className="login__box">
            <input type="password" placeholder="Password" required className="login__input" />
            <i className="ri-lock-2-fill"></i>
          </div>
        </div>
        <div className="login__check">
          <div className="login__check-box">
            <input type="checkbox" className="login__check-input" id="user-check" />
            <label htmlFor="user-check" className="login__check-label">Remember me</label>
          </div>
          <a href="#" className="login__forgot">Forgot Password?</a>
        </div>
        <button type="submit" className="login__button">Login</button>
        <div className="login__register">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;

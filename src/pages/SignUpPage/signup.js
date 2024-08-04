import React from 'react';
import '../../assets/css/styles.css';
import '../../assets/scss/_base.scss';
import '../../assets/scss/_breakpoints.scss';
import '../../assets/scss/_login.scss';
import '../../assets/scss/_variables.scss';
import '../../assets/scss/styles.scss';

export const SignUp = () => {
  return (
    <div className="login">
      <form action="" className="login__form">
        <h1 className="login__title">Sign Up</h1>
        <div className="login__inputs">
          <div className="login__box">
            <input type="text" placeholder="Username" required className="login__input" />
            <i className="ri-user-fill"></i>
          </div>
          <div className="login__box">
            <input type="email" placeholder="Email ID" required className="login__input" />
            <i className="ri-mail-fill"></i>
          </div>
          <div className="login__box">
            <input type="password" placeholder="Password" required className="login__input" />
            <i className="ri-lock-2-fill"></i>
          </div>
          <div className="login__box">
            <input type="password" placeholder="Confirm Password" required className="login__input" />
            <i className="ri-lock-2-fill"></i>
          </div>
        </div>
        <button type="submit" className="login__button">Sign Up</button>
        <div className="login__socials">
          <span>Or sign up with</span>
          <div className="login__social-buttons">
            <button type="button" className="login__social-button">
              <i className="ri-google-fill"></i> Google
            </button>
            <button type="button" className="login__social-button">
              <i className="ri-github-fill"></i> GitHub
            </button>
          </div>
        </div>
        <div className="login__register">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

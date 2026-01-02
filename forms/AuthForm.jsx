import React, { useState } from 'react';
import './style.css';

const AuthForm = () => {
  const [activePanel, setActivePanel] = useState('signin');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    emailSignup: '',
    passwordSignup: '',
    rememberMe: false,
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign in logic here
    console.log('Sign in:', { email: formData.email, password: formData.password });
    window.location.href = '/index.html';
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign up logic here
    console.log('Sign up:', { 
      username: formData.username, 
      email: formData.emailSignup, 
      password: formData.passwordSignup 
    });
    window.location.href = '/index.html';
  };

  return (
    <>
      <nav className="top-nav" role="navigation" aria-label="Primary">
        <a className="home-link" href="/index.html" aria-label="Go to Home">
          <svg className="home-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3.172 2.5 11h1.9v8a1 1 0 0 0 1 1H10v-6h4v6h4.6a1 1 0 0 0 1-1v-8h1.9L12 3.172z"/>
          </svg>
          Home
        </a>
      </nav>
      
      <input 
        className="visually-hidden" 
        type="radio" 
        name="panel" 
        id="to-signin" 
        checked={activePanel === 'signin'}
        onChange={() => setActivePanel('signin')}
      />
      <input 
        className="visually-hidden" 
        type="radio" 
        name="panel" 
        id="to-signup"
        checked={activePanel === 'signup'}
        onChange={() => setActivePanel('signup')}
      />

      <section className="form_box container-xxl px-0">
        <div id="left">
          <header id="head">
            <h1>WELCOME BACK <img src="/assets/forms/wave-unscreen.gif" alt="wave" /></h1>
            <p id="details">Welcome back! Please enter your details.</p>
          </header>

          <form onSubmit={handleSignIn}>
            <section className="form_login">
              <label htmlFor="email" className="email form-label">Email</label>
              <input 
                className="form-control" 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter your email" 
                autoComplete="off" 
                minLength="5"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="password" className="password form-label">Password</label>
              <input 
                className="form-control" 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter your password" 
                autoComplete="off" 
                minLength="4"
                value={formData.password}
                onChange={handleInputChange}
              />
            </section>

            <div id="footer">
              <div className="remember-wrap">
                <input 
                  type="checkbox" 
                  id="kotak"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label htmlFor="kotak">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" id="button">Sign in</button>

            <p id="or">Or</p>

            <div id="sign_up">
              <p>Don't have an account?
                <label 
                  htmlFor="to-signup" 
                  className="switch-link"
                  onClick={() => setActivePanel('signup')}
                > Sign up</label>
              </p>
            </div>

            <ul className="container_gambar list-unstyled">
              <li><a href="https://www.google.com/"><img src="../assets/logo/Google.png" alt="google" /></a></li>
              <li><a href="https://www.facebook.com/"><img src="../assets/logo/Facebook.png" alt="facebook" /></a></li>
              <li><a href="https://github.com/Dendroculus/Food-Recipe-Website"><img src="../assets/logo/Github.png" alt="github" /></a></li>
              <li><a href="https://twitter.com/"><img src="../assets/logo/X.png" alt="X" /></a></li>
            </ul>
          </form>
        </div>

        <div id="right">
          <div className="head_right">
            <h1>SIGN UP</h1>
          </div>

          <form onSubmit={handleSignUp}>
            <section className="form_signup">
              <label htmlFor="username" className="username form-label">Username</label>
              <input 
                className="form-control" 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Enter your username" 
                autoComplete="off" 
                minLength="5"
                value={formData.username}
                onChange={handleInputChange}
              />
              <label htmlFor="email_signup" className="email_signup form-label">Email</label>
              <input 
                className="form-control" 
                type="email" 
                name="emailSignup" 
                id="email_signup" 
                placeholder="Enter your email" 
                autoComplete="off" 
                minLength="5"
                value={formData.emailSignup}
                onChange={handleInputChange}
              />
              <label htmlFor="password_signup" className="password_signup form-label">Password</label>
              <input 
                className="form-control" 
                type="password" 
                name="passwordSignup" 
                id="password_signup" 
                placeholder="Enter your password" 
                autoComplete="off" 
                minLength="4"
                value={formData.passwordSignup}
                onChange={handleInputChange}
              />
            </section>

            <div id="footer_signup">
              <input 
                type="checkbox" 
                id="kotak2"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
              />
              <label htmlFor="kotak2">I agree to the Terms of Service and Privacy Policy</label>
            </div>

            <button type="submit" id="button_signup">Sign up</button>

            <div id="sign_in">
              <p>Already have an account?
                <label 
                  htmlFor="to-signin" 
                  className="switch-link"
                  onClick={() => setActivePanel('signin')}
                > Sign in</label>
              </p>
            </div>

            <p id="or_signup">Or</p>

            <ul className="container_gambar_signup list-unstyled">
              <li><a href="https://www.google.com/"><img src="../assets/logo/Google.png" alt="google" /></a></li>
              <li><a href="https://www.facebook.com/"><img src="../assets/logo/Facebook.png" alt="facebook" /></a></li>
              <li><a href="https://github.com/Dendroculus/Food-Recipe-Website"><img src="../assets/logo/Github.png" alt="github" /></a></li>
              <li><a href="https://twitter.com/"><img src="../assets/logo/X.png" alt="X" /></a></li>
            </ul>
          </form>
        </div>

        <section className="overlay-container" aria-hidden="true">
          <div className="overlay">
            <label 
              htmlFor="to-signin" 
              className="overlay-panel overlay-left" 
              role="button" 
              tabIndex="0" 
              aria-label="Switch to Sign In"
              onClick={() => setActivePanel('signin')}
              onKeyDown={(e) => e.key === 'Enter' && setActivePanel('signin')}
            >
              <h2>Welcome Back!</h2>
              <p>To keep connected with us please login with your personal info</p>
              <span className="to_btn">Sign In</span>
            </label>

            <label 
              htmlFor="to-signup" 
              className="overlay-panel overlay-right" 
              role="button" 
              tabIndex="0" 
              aria-label="Switch to Sign Up"
              onClick={() => setActivePanel('signup')}
              onKeyDown={(e) => e.key === 'Enter' && setActivePanel('signup')}
            >
              <h2>Hey There!</h2>
              <p>Enter your personal details and start your cooking journey with us</p>
              <span className="to_btn">Sign Up</span>
            </label>
          </div>
        </section>
      </section>
    </>
  );
};

export default AuthForm;

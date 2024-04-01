import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(null);
  const [signedUser, setSignedUser] = useState(null);
  const emailRef = useRef(null);

  {
    /***** sign in function handle *****/
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    //reset error and reset success
    setError("");
    setSuccess("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("Your password must be should 6 digit or longer");
      return;
    } else if (!/[A-B]/.test(password)) {
      setError("password should be one capital character");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSignedUser(result.user);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  {
    /***** forgot function function handle *****/
  }
    const handleForgotPassword = () => {
      console.log('success');
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Successfully send reset link in your email");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="flex flex-col items-center">
      <h3>Sign In Form</h3>
      <form onSubmit={handleSignIn}>
        <legend>Email</legend>
        <input
          className="border-2 mb-4 py-3 px-4 rounded-lg"
          type="email"
          name="email"
          ref={emailRef}
          required
        />
        <br />
        <legend> Password</legend>
        <div className="relative">
          <input
            className="border-2 mb-4 py-3 px-4 rounded-lg"
            type={showPassword ? "text" : "password"}
            name="password"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-5 right-4"
          >
            {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                  </span>
                  <br />
          <Link onClick={handleForgotPassword}>Forgot your password?</Link>
        </div>
        <br />
        <input
          className="border-2 py-3 px-4 rounded-lg"
          type="submit"
          value="Log In"
        />
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      {signedUser ? <p>{signedUser.email}</p> : ""}
    </div>
  );
};

export default SignIn;

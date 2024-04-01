import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const SignUp = () => {
  const [signedUser, setSignedUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    //reset error and reset success
    setError("");
    setSuccess("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(accepted);
    if (password.length < 6) {
      setError("Your password must be should 6 digit or longer");
      return;
    } else if (!/[A-B]/.test(password)) {
      setError("password should be one capital character");
      return;
    } else if (!accepted) {
      setError("Please accept our terms and condition");
      return;
    }
    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        sendEmailVerification(auth.currentUser).then(() => {
          alert("Email verification sent!");
        });
        setSignedUser(result.user);
        setSuccess("User successfully create");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  console.log(signedUser, error);
  return (
    <div className="flex flex-col items-center">
      <h3>Sign Up Form</h3>
      <form onSubmit={handleSignUp}>
        <legend>Email</legend>
        <input
          className="border-2 mb-4 py-3 px-4 rounded-lg"
          type="email"
          name="email"
          required
        />
        <br />
        <legend> Password</legend>
        <div className="relative">
          <input
            className="border-2 py-3 px-4 rounded-lg"
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
        </div>
        <br />
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms"> Accept our terms & condition</label>
        <br />
        <input
          className="border-2 mt-2 py-3 px-4 rounded-lg"
          type="submit"
          value="Sign Up"
        />
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default SignUp;

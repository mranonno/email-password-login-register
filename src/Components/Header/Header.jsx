import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const handleSignIn = () => {
    navigate("/signIn");
  };

  return (
    <div className="flex justify-between px-8 mt-5">
      <div>
        <h3 className="text-2xl font-semibold">Email Login</h3>
      </div>
      <div className="flex gap-4">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </div>
      <div className="flex gap-4">
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;

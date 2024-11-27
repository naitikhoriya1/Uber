import { Link } from "react-router-dom";
import Uberpic from "../assets/Uber.png";
import { useState } from "react";
const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setUserData] = useState({});

  const submithandler = (e) => {
    e.preventDefault();

    setUserData({ email: email, password: password });
    setemail("");
    setpassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        {" "}
        <img className="w-20 mb-5" src={Uberpic} alt="Uber" />
        <form onSubmit={submithandler}>
          <h3 className="text-xl font-medium mb-2">Please enter your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-xl font-medium mb-2">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold py-3 rounded-lg mt-2 w-full">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          New Here?
          <Link className="text-blue-600" to={"/signup"}>
            {" "}
            Create New Account
          </Link>{" "}
        </p>
      </div>
      <Link
        to="/captain-login"
        className="bg-[#F85901] flex items-center justify-center text-white font-semibold py-3 rounded-lg mt-2 w-full"
      >
        Login In As Captain
      </Link>
    </div>
  );
};

export default UserLogin;

import { useState } from "react";
import { Link } from "react-router-dom";
import Uberpic from "../assets/Uber.png";

const CaptainSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [userData, setUserData] = useState({});

  const submithandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: { firstName: firstname, lastName: lastname },

      email: email,
      password: password,
    });
    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          {" "}
          <img className="w-20" src={Uberpic} alt="Uber" />
          <form onSubmit={submithandler}>
            <h3 className="text-xl font-medium mb-1">Captain's name</h3>
            <div className="flex gap-3">
              <input
                className="bg-[#eeeeee] mb-2 rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base"
                required
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                type="text"
                placeholder="First name"
              />
              <input
                className="bg-[#eeeeee] mb-2 rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base"
                required
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                type="text"
                placeholder="Last name"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Captain's email</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-xl font-medium mb-1">Captain's password</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button className="bg-[#111] text-white font-semibold py-3 rounded-lg w-full">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account?
            <Link className="text-blue-600" to={"/login"}>
              {" "}
              Login here
            </Link>{" "}
          </p>
        </div>
        <Link
          to="/signup"
          className="bg-[#F85901] flex items-center justify-center text-white font-semibold py-3 rounded-lg mt-2 w-full"
        >
          Signup As A User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;

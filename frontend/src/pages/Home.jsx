import { Link } from "react-router-dom";
import Uberpic from "../assets/Uber.png";
const home = () => {
  return (
    <div>
      <div className="bg-cover  bg-[url(https://i.pinimg.com/736x/ad/ee/ff/adeeff0d1c5749c828c5649f1babbed9.jpg)] h-screen pt-5  w-full flex justify-between flex-col bg-red-400">
        <img className="w-20 ml-5" src={Uberpic} alt="Uber" />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold"> Get started with Uber</h2>
          <Link
            to={"/login"}
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-4"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default home;

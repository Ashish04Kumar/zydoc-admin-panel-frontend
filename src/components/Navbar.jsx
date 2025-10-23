import React, { useContext } from "react";
import { assets } from "../assets/assets_admin/assets";
import AdminContext from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import DoctorContext from "../context/DoctorContext";

const Navbar = () => {
  const { atoken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const logout = () => {
    {
      atoken && setAToken("");
      atoken && localStorage.removeItem("atoken");
      dToken && setDToken("");
      dToken && localStorage.removeItem("dtoken");
      navigate("/");
    }
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b border-white bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          src={assets.admin_logo}
          alt=""
          className="w-44 cursor-pointer navbar-logo"
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {atoken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

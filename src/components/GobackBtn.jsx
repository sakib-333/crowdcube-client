import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const GobackBtn = ({ prevRoute = "/" }) => {
  const navigate = useNavigate();

  const handleGobak = () => {
    navigate(prevRoute);
  };
  return (
    <button
      className="btn-primary my-4 flex items-center gap-1"
      onClick={handleGobak}
    >
      <IoMdArrowRoundBack /> <span>Back</span>
    </button>
  );
};

export default GobackBtn;

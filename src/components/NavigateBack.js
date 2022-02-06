import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateBack() {
  const navigate = useNavigate();
  return <i onClick={() => navigate(-1)} className="fas fa-arrow-left"></i>;
}

export default NavigateBack;

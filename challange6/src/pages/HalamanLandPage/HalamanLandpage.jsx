import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterRental from "../../components/FooterLandPage/FooterLandpage";
import FormRental from "../../components/FormLandPage/FormLandpage";
import HeaderRental from "../../components/HeaderLandPage/HeaderLandpage";
import NavbarRental from "../../components/NavbarLandPage/NavbarLandpage";

function Rental() {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login", { replace: true });
  };
  return (
    <>
      <NavbarRental logout={() => handleLogout()} />
      <HeaderRental />
      <FormRental />
      <FooterRental />
    </>
  );
}

export default Rental;

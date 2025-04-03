

import Logo from "/src/assets/images/logos/logo.svg";
// import Logo from "/src/assets/images/logos/LOGO-NINJA.png";

import { Link } from "react-router";
const FullLogo = () => {
  return (
    <Link to={"/"}>
      <img src={Logo} alt="logo" className="block h-auto max-w-full object-fill" />
    </Link>
  );
};

export default FullLogo;

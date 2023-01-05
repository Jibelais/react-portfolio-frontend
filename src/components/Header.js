import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
      margin:"50px",
      width: "400px",
      display: "flex",
      justifyContent: "space-around",
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>
    </header>
  );
}

export default Header;
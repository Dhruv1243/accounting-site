import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">Logo</h1>
      <h1 className="navlink">
        <a href="#home">Home</a>
      </h1>
      <h1 className="navlink">
        <a href="#about">About</a>
      </h1>
      <h1 className="navlink">
        <a href="#services">Services</a>
      </h1>
      <h1 className="navlink">
        <a href="#location">Location</a>
      </h1>
      <h1 className="navlink">
        <a href="#contact">Contact</a>
      </h1>
    </div>
  );
}

export default Navbar;

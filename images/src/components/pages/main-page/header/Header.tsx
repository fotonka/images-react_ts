import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="https://google.com/" className="logo">
        <img
          className="logo-image"
          src="https://i.pinimg.com/originals/ae/bf/f8/aebff820fd4da79db61299c3ac69bd9a.png"
          alt="logo"
        />
      </a>
      <form action="" className="header-form">
        <input
          type="text"
          className="search"
          placeholder="Enter name of image..."
        />
      </form>
      <a href="https://google.com/" className="admin">
        Admin
      </a>
    </header>
  );
};

export default Header;

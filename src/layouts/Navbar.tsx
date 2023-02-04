import { Typography } from "antd";
import "../assets/css/Navbar.css";

const NavbarComponent: React.FC = () => {
  const { Title } = Typography;

  return (
    <div className="navbar-container">
      <div>
        <img
          src="https://i.ibb.co/9WZKQBD/pngwing-com-2.png"
          alt="app-logo"
          className="navbar-logo"
        />
      </div>
      <Title level={4} className="navbar-title">
        Lookitup
      </Title>
    </div>
  );
};

export default NavbarComponent;

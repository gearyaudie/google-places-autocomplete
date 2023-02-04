import { Typography, Button } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  GlobalOutlined,
} from "@ant-design/icons";
import "../assets/css/components/Footer.scss";

const Footer = () => {
  const { Title, Paragraph } = Typography;

  const openWindow = (link: string) => {
    window.open(link);
  };

  return (
    <div className="footer-container">
      <Title level={3}>Lookitup</Title>
      <Paragraph className="footer-desc">
        An assignment task created with React JS & Redux, links below for more
        info.
      </Paragraph>
      <div className="btn-container">
        <Button
          shape="circle"
          icon={<GithubFilled />}
          onClick={() =>
            openWindow(
              `https://github.com/gearyaudie/google-places-autocomplete`
            )
          }
          className="link-btn mr-sm"
        />
        <Button
          shape="circle"
          icon={<LinkedinFilled />}
          onClick={() =>
            openWindow(`https://www.linkedin.com/in/geary-audie-308734142/`)
          }
          className="link-btn mr-sm"
        />
        <Button
          shape="circle"
          icon={<GlobalOutlined />}
          onClick={() => openWindow(`https://gearyaudie.com`)}
          className="link-btn"
        />
      </div>
    </div>
  );
};

export default Footer;

import "../styles/Footer.scss"
import logo from "../images/logoWhite.png"

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo en blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

import "./Home.css";
import { useNavigate } from "react-router-dom";
import BinaryImg from "../assets/binaryImage.png";
import MorseImg from "../assets/morseImage.png";
import Footer from "./Footer";

export function Home() {
  const navigate = useNavigate();
  function goMorse() {
    navigate("/morse", { replace: true });
  }
  function goBinary() {
    navigate("/binary", { replace: true });
  }

  return (
    <body>
      <div className="header">
        <h1>MORSEBIN</h1>
      </div>

      <div className="options">
        <img
          src={BinaryImg}
          alt="Binary Button"
          title="Binary Button"
          onClick={goBinary}
        />
        <img
          src={MorseImg}
          alt="Morse Button"
          title="Morse Button"
          onClick={goMorse}
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

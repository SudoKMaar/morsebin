import "./Translator.css";
import { useState } from "react";
import { toBinary } from "../utils/Translator";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export function Binary() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [inputType, setInputType] = useState("Text");
  const [outputType, setOutputType] = useState("Binary");
  const [changed, setChanged] = useState(false);
  const navigate = useNavigate();
  function goHome() {
    navigate("/home", { replace: true });
  }
  function cleanTexts() {
    setInputText("");
    setOutputText("");
  }
  function changeLanguage() {
    if (changed) {
      setInputType(" Binary");
      setOutputType(" Text");
    } else {
      setInputType(" Text");
      setOutputType(" Binary ");
    }
    setChanged(!changed);
  }
  function downloadTxtFile() {
    const element = document.createElement("a");
    const file = new Blob([outputText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "converted_text.txt";
    document.body.appendChild(element);
    element.click();
  }
  return (
    <body>
      <div className="translate">
        <button className="backButton" onClick={goHome}>
          Back
        </button>

        <div className="setor">
          <h2 className="setorTxt">Write your text here:</h2>
          <h2 className="languageType"> {inputType} </h2>
          <textarea
            name="inputText"
            id="inputText"
            placeholder="Type here..."
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
        </div>

        <div className="buttons">
          <button
            onClick={() => {
              changeLanguage();
            }}
          >
            Swap
          </button>

          <button
            onClick={() => {
              setOutputText(toBinary(inputText));
            }}
          >
            Convert
          </button>

          <button onClick={cleanTexts}>Clear</button>
          <button onClick={downloadTxtFile}>Export</button>
        </div>

        <div className="setor">
          <h2 className="setorTxt">Converted text:</h2>
          <h2 className="languageType"> {outputType} </h2>
          <textarea
            name="outputText"
            id="outputText"
            placeholder="Your translation will appear here."
            readOnly
            value={outputText}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

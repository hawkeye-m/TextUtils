// import { getByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [history, setHistory] = useState([])

  const handleUpClick = () => {
    setText(text.toUpperCase());

    showDiv();
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const handleSfClick = () => {
    let sfFormat = (sen) => {
      const allSentences = sen.split(".");

      for (let i = 0; i < allSentences.length; i++) {
        allSentences[i] = allSentences[i].trim();

        if (allSentences[i].length > 0) {
          allSentences[i] =
            allSentences[i][0].toUpperCase() + allSentences[i].slice(1);
        }
      }
      return allSentences.join(".");
    };
    setText(sfFormat(text));
    showDiv()
  };

  const voCount = (Sentence) => {
    const vowels = ["a", "e", "i", "o", "u"];
    const loCase = Sentence.toLowerCase();
    let vCount = 0;

    for (let char of loCase) {
      if (vowels.includes(char)) {
        vCount++;
      }
    }

    return vCount;
  };

  const handleVcClick = () => {
    alert(`There are ${voCount(text)} Vowels in the sentence.`);

    showDiv()
  };

  const coCount = (Sentence) => {
    const vowels = ["a", "e", "i", "o", "u"];
    const loCase = Sentence.toLowerCase();
    let cCount = 0;

    for (let char of loCase) {
      if (char>"a" && char<"z"&&!vowels.includes(char)) {
        cCount++;
      }
    }

    return cCount;
  };

  const handleCoClick = () => {
    alert(`There are ${coCount(text)} Constants in the sentence.`);
  };
  const handleClClick = () => {
    setText("");

    handleOnClick();
  };
  const handleOnClick = () => {
    setHistory([...history, isVisible]);
    setIsVisible(false);
  };

  const showDiv = () => {
    setHistory([...history, isVisible]);
    setIsVisible(true);
  };

  const handleUnClick =()=>{
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setIsVisible(previousState);
      setHistory(history.slice(0, -1)); 
    }
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            style={{backgroundColor : props.mode==='dark'?'white':'gray', color: props.mode==='dark'?'black':'white'}}

            value={text}
            placeholder="Enter Your Text"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          UPPERCASE
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          lowercase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleSfClick}
        >
          Sentence Format
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleVcClick}
        >
          Vowel Count
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleCoClick}
        >
          Const Count
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleClClick}
        >
          Clear
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleUnClick}
        >
          Undo
        </button>
      </div>
      {isVisible &&(<div className="container " my-3>
        <h1>Your text summery</h1>
        <p>
          There are {text.split(" ").length} words and {text.length} Characters.
        </p>
        <p>There is {console.log(voCount(text))} Vowels</p>
      </div>)}
    </>
  );
}

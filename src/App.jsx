import "./App.css";
import Cyrcle from "./Cyrcle";
import logoImage from "../public/images/logo.svg";
import iconRock from "../public/icons/icon-rock.svg";
import iconScissors from "../public/icons/icon-scissors.svg";
import iconPaper from "../public/icons/icon-paper.svg";
import { useState } from "react";
import Picked from "./Picked";
import Rules from "./Rules";
import Button from "./Button";

function App() {

  const [show, setShow] = useState(false);
  const [choice, setChoice] = useState({ color: "", image: "", chosen: false });
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState(0);
  const [computer, setComputer] = useState({ color: "", image: "" });
  const [result, setResult] = useState("");

  //control the game
  function restartGame() {
    setChoice({ name: "", color: "", image: "", chosen: false });
    setComputer({ name: "", color: "", image: "" });
    setShow(false);
  }

  // Get the data from the choice and update the score value
  function claimData(infos) {
    setChoice(infos);
    let choices = [
      { name: "paper", color: "rgba(81, 107, 241)", image: iconPaper },
      { name: "scissors", color: "rgba(233, 164, 22)", image: iconScissors },
      { name: "rock", color: "rgba(220, 55, 85)", image: iconRock },
    ];

    let cmp = choices[Math.floor(Math.random() * choices.length)];
    setComputer(cmp);

    if (
      (infos.name == "paper" && cmp.name == "rock") ||
      (infos.name == "scissors" && cmp.name == "paper") ||
      (infos.name == "rock" && cmp.name == "scissors")
    ) {
      setScore((prev) => prev + 1);
      setResult("YOU WIN");
      setWinner("winner");
    } else {
      if (infos.name == cmp.name) {
        setResult("TIE");
        setWinner("");
      } else {
        setScore((prev) => prev - 1);
        setResult("YOU LOSE");
        setWinner("loser");
      }
    }
  }

  //the displayer : either choosing or showing results
  function displayChoosingOrResults() {
    const whileChoosing = (
      <div
        className="sym-container"
        style={{ backgroundImage: `url("../public/images/bg-triangle.svg")` }}
      >
        <div className="symbols">
          <Cyrcle
            getData={claimData}
            color="rgba(81, 107, 241)"
            hover="rgba(81, 107, 241, 0.4)"
            image={iconPaper}
            name="paper"
          />
          <Cyrcle
            getData={claimData}
            color="rgba(233, 164, 22)"
            hover="rgba(233, 164, 22, 0.4)"
            image={iconScissors}
            name="scissors"
          />
        </div>
        <Cyrcle
          getData={claimData}
          color="rgba(220, 55, 85)"
          hover="rgba(220, 55, 85, 0.4)"
          image={iconRock}
          name="rock"
        />
      </div>
    );

    const afterChoosing = (
      <div className="results">
        <Picked
          message="YOU PICKED"
          color={choice.color}
          image={choice.image}
          isWinner={winner == "winner" ? "winner" : "loser"}
        />
        <div className="result-container">
          <div className="result">{result}</div>
          <button onClick={restartGame} className="tryAgain">
            PLAY AGAIN
          </button>
        </div>
        <Picked
          message="THE HOUSE PICKED"
          color={computer.color}
          image={computer.image}
          isWinner={winner == "winner" ? "loser" : "winner"}
        />
      </div>
    );

    if (choice.chosen) return afterChoosing;
    else return whileChoosing;
  }

  //display the rules
  function displayRules() {
    if (show)
      return (
        <div className="father">
          <div className="Full-container">
            <Rules exit={disableShow} />
          </div>
        </div>
      );
    else return null;
  }

  function activeShow() {
    setShow(true);
  }

  function disableShow() {
    setShow(false);
  }

  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <img src={logoImage} alt="game-name" style={{ opacity: "1" }} />
        </div>
        <div className="score">
          <h4>score</h4>
          <p>{score}</p>
        </div>
      </div>

      {displayChoosingOrResults()}
      {displayRules()}

      <div className="rule-container">
        <div className="control"></div>
        <Button classname="rules right" value="RULES" function={activeShow} />
      </div>
    </div>
  );
}

export default App;

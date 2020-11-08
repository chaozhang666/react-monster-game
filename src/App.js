import "./App.css";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import { useState } from "react";

import BorderLinearProgress from "@material-ui/core/LinearProgress";

function App() {
  const [num, setNum] = useState(0);
  const [msg, setMsg] = useState("Welcome to Monster Attack Game");
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);

  const playerAttack = () => {
    setNum(Math.floor(Math.random() * 20));
    setMonsterHealth(monsterHealth - num);
    setMsg("Player Attack Monster by " + num);
    if (monsterHealth < 0) {
      alert("Player Win !");
    }
  };

  const monsterAttack = () => {
    setNum(Math.floor(Math.random() * 20));
    setPlayerHealth(playerHealth - num);
    setMsg("Monster Attack Player by " + num);
    if (playerHealth < 0) {
      alert("Monster Win !");
    }
  };

  const playerHeal = () => {
    setNum(Math.floor(Math.random() * 20));
    setPlayerHealth(playerHealth + num);
    setMsg("Player Heal by " + num);
  };

  const monsterHeal = () => {
    setNum(Math.floor(Math.random() * 20));
    setMonsterHealth(monsterHealth + num);
    setMsg("Monster Heal by " + num);
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <Container maxWidth="lg">
        <h1 className="title">{msg}</h1>

        <div className="content">
          <div className="card">
            <h3>Player</h3>

            <BorderLinearProgress
              variant="determinate"
              value={playerHealth}
              style={{ margin: "40px" }}
            />

            <img src="https://media.giphy.com/media/gkLoGmzzpXnq2VfGrw/giphy.gif" />

            <div>
              <a
                class="waves-effect waves-light btn red"
                onClick={playerAttack}
              >
                Attack
              </a>
              <a
                class="waves-effect waves-light btn green"
                onClick={playerHeal}
              >
                Heal
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Monster</h3>

            <BorderLinearProgress
              variant="determinate"
              value={monsterHealth}
              style={{ margin: "40px" }}
            />

            <img src="https://media.giphy.com/media/J4gcsqaVFjxzzZePNE/giphy.gif" />

            <div>
              <a
                class="waves-effect waves-light btn red"
                onClick={monsterAttack}
              >
                Attack
              </a>
              <a
                class="waves-effect waves-light btn green"
                onClick={monsterHeal}
              >
                Heal
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;

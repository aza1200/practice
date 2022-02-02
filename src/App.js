import {useState} from "react";

function App() {
  const [counter,modifier] = useState(0);

  const onClick = (event) => {
      modifier((current)=> current+1);
      const direction = event.target.classList[1];

      const cubeContainer = document.querySelector(".cube-container");
      cubeContainer.classList = [`cube-container changed_${direction}`]
  }

  function Btn(props){
      return(
      <div onClick={onClick} className={`btn ${props.direction}`}>
          {props.number}
      </div>
      )
  }

  return (
    <div>
        <div className="container">
            <h1>Total Click : {counter}</h1>
            <div className="btns">
                <Btn direction="front" number="1"/>
                <Btn direction="right" number="2"/>
                <Btn direction="top" number="3"/>
                <Btn direction="back" number="4"/>
                <Btn direction="left" number="5"/>
                <Btn direction="bottom" number="6"/>
            </div>
            <div className="cube-container">
                <div className="front cube"><img src="img/06.png" alt=""/></div>
                <div className="right cube"><img src="img/02.jpg" alt=""/></div>
                <div className="top cube"><img src="img/03.jpg" alt=""/></div>
                <div className="back cube"><img src="img/04.jpg" alt=""/></div>
                <div className="left cube"><img src="img/05.jpg" alt=""/></div>
                <div className="bottom cube"><img src="img/01.jpg" alt=""/></div>
            </div>
        </div>
    </div>
  );
}

export default App;

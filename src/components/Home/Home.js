import React from 'react';
import "./styles.css";
import CssLines from "../CssLines/CssLines"

function Home() {
  return (
    <div className="App">
      <div className="main">
        <div className="two-part-block">
          <div>
            <header className="main-wrap">
              <div className="stage">Yehoshua Kopyrin</div>
              <div>Hello, my name is</div> 
              <div>Yehoshua. I am a</div> 
              <div>Fullstack developer.</div>
            </header>
          </div>
          <div>
            <CssLines />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

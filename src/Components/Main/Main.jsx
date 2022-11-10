import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
  <div class='wrapper'>
      <div class='container-click'>
        <div class='click'>Click Here</div>
        <img class='click-img' alt='img' src='https://abrakadabra.fun/uploads/posts/2022-02/1643946677_2-abrakadabra-fun-p-belaya-strelochka-na-prozrachnom-fone-7.png'></img>
      </div>
      <div className="container-minion">
        <h1>Minion</h1>
        <Link to='/Page'><img class="minion" alt="img" src="https://deti-online.com/img/kak-narisovat-minona-boba-color.jpg"/></Link>
      </div>
    </div>
)
}

export default Main;





import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TODO
      </header>
      <div className="Tag-header">
        TODO
      </div>
      <div className="Content">

        <div className="card">
          <div className="card-title">
            <div className="card-title-text">
              Understand CSS Mask in 4 Minutes
            </div>
            <div className="price">
              $46.334
            </div>
          </div>
          <div className="card-footer">
            <div className="tags">
              <div className="tag"> Comida </div>
              <div className="tag"> Salud</div>
              <div className="tag"> Regalos</div>
            </div>
          </div>
        </div>
        </div>

    </div>
  );
}

export default App;

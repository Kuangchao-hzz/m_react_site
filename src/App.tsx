import 'normalize.css/normalize.css'
import * as React from 'react';
import './App.css';
import MFooter from './views/Layout/MFooter/index'
import MHeader from './views/Layout/MHeader/index'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
				<MHeader/>
				<MFooter/>
      </div>
    );
  }
}

export default App;

import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.material.orange.light.compact.css';
import 'devextreme/dist/css/dx.material.gfai.css';
import React from 'react';
import './App.css';
import Routes from './routes';
import Loading from './components/Default/Loading';


function App() {
  return (
    <div className="App">
        <header>
          <Loading/>
        </header>
        {/* <Routes/> */}
    </div>
  );
}

export default App;

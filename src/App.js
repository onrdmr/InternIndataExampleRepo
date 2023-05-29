import logo from './logo.svg';
import './App.css';
import {ReactText, ChildComponent} from './components/ReactText';
import { ReactHeader } from './components/ReactHeader';
// import { ReactIconRemoveContext} 
import ReactIconRemoveContext from './components/contexts/ReactIconRemoveContext';
import { useState, useEffect } from 'react';

function App() {
  console.log(logo)
  
  const [ headerRemoval, setHeaderRemoval ] = useState(false)

  useEffect(() => {



  }, [headerRemoval])


  return (
    <div className="App">
      <header className="App-header">
        <ReactIconRemoveContext.Provider value = {[headerRemoval, setHeaderRemoval ]} >
          {
            !headerRemoval ?  
            <ReactHeader image={logo} ></ReactHeader> : null
          }
          <ReactText></ReactText>
          <ChildComponent></ChildComponent>
        
        </ReactIconRemoveContext.Provider>
      </header>
    </div>
  );
}

export default App;

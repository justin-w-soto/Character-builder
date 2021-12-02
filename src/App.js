import './App.css';
import { useState } from 'react';
import Character from './components/Character/Character';
import Display from './components/Display/Display';
import Picker from './components/Picker/Picker';

function App() {
  const [head, setHead] = useState('alien');
  const [middle, setMiddle] = useState('cool');
  const [pants, setPants] = useState('bread');
  const [newCatchphrase, setNewCatchphrase] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = () => {
    setCatchphrases((prevState) => [...prevState, newCatchphrase]);
  };

  return (
    <div className="App">
      <main>
      <header className="App-header">
        <h1>Character Building Macho Machine</h1>
      
      <Picker 
      head={head} 
      onHeadChange={setHead} 
      middle={middle} 
      onMiddleChange={setMiddle} 
      pants={pants}
      onPantsChange={setPants}
      newCatchphrase={newCatchphrase} 
      setCatchphrase={setNewCatchphrase} 
      handleClick={handleClick} />

      <Display catchphrases={catchphrases} />

      <Character 
      head={head} 
      middle={middle} 
      pants={pants}/>
        
      </header>
      </main>
    </div>
  );
}

export default App;

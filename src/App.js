import './App.css';
import { useState } from 'react';
import { Character } from './components/Character/Character';
import { Display } from './components/Display/Display';
import { Picker } from './components/Picker/Picker';

function App() {
  const {head, setHead} = useState('');
  const {middle, setMiddle} = useState('');
  const {pants, setPants} = useState('');
  const {newCatchphrase, setNewCatchphrase} = useState('');
  const {catchphrases, setCatchphrases} = useState([]);

  const handleClick = () => {
    setCatchphrases((prevState) => [...prevState, newCatchphrase])
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Building Macho Machine</h1>
      </header>
      
      <Character 
      head={head} 
      middle={middle} 
      pants={pants}/>

      <Display />
      
      <Picker 
      head={head} 
      onHeadChange={setHead} 
      middle={middle} 
      onMiddleChange={setMiddle} 
      newCatchphrase={newCatchphrase} 
      setCatchphrase={setNewCatchphrase} 
      handleClick={handleClick} />

        
    </div>
  );
}

export default App;

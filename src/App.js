import './App.css';
import { Character } from './components/Character/Character';
import { Display } from './components/Display/Display';
import { Picker } from './components/Picker/Picker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>h3llo?</h1>
      </header>
      
      <Character />
      <Display />
      <Picker />

        
    </div>
  );
}

export default App;

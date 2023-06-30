import './App.css';
import StyledButton, { FancyButton } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <StyledButton>Button</StyledButton>
      <div>
        <br/>
      </div>
      <StyledButton variant='outline'>Button</StyledButton>
      <div>
        <br/>
      </div>
      <div>
        <br/>
      </div>
      <FancyButton as='a'>Fancy Button</FancyButton>

    </div>
  );
}

export default App;

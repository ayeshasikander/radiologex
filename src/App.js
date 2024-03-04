import './App.scss';
import { ThemeProvider } from 'styled-components';
import { global } from './services/global';
import Routing from './navigation/Routing';
function App() {
  return (
    <ThemeProvider theme={global} className="App">
      <Routing />
    </ThemeProvider>
  );
}

export default App;

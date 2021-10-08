import './App.css';
import Container from './components/Container/Container';
import { VoteProvider } from './context/VoteContext';

function App() {
  return (
    <VoteProvider>
      <Container />
    </VoteProvider>
  );
}

export default App;

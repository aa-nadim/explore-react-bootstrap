import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';

function App() {
  return (
    <div className='App'>
      <button>Plain Button</button>
      <Button variant='danger'>My Button</Button>
      <Spinner animation='border' variant='danger' />
      <GridCard />
    </div>
  );
}

export default App;


import Header from './Header';
import Card from './components/Card';
import './App.css';
import './index.css';

function App() {
  const starShips = [];
  
  return (
    <>
      <Header />
      <Card data={starShips}/>   
    </>
  );
}

export default App;


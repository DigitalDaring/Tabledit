import './App.css';
import {useState} from 'react';
import FriendlyCard from './components/friendly-card/friendly-card';
import FriendlyHeader from './components/friendly-header/friendly-header';
import FriendlyNavigation from './components/friendly-navigation/friendly-navigation';

const App = () => {
  const [navState, setNavState] = useState({isOpen: false})

  const toggleNav = () => {
      const newNavState = {
          isOpen: !navState.isOpen
      }
      setNavState(newNavState);
  };

  return (
    <div className="App">
      <header className="NavHeader">
        <FriendlyNavigation isOpen={navState.isOpen}/>
      </header>
      <FriendlyHeader>
        <a onClick={toggleNav}>{navState.isOpen ? '=' : 'x'}</a>
      </FriendlyHeader>
      <FriendlyCard>
        <header className="CardHeader">
          <h1>Download Free Trial Today!</h1>
        </header>
        <p>See how fun and easy it is to create your own tablature and sheet music...</p>
        <footer className="CardFooter">
          <a className="ClassyButton">Download</a>
        </footer>
      </FriendlyCard>
    </div>
  );
}

export default App;

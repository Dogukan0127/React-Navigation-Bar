import './App.css';
import './Components/Logo/Logo.jsx';
import Logo from './Components/Logo/Logo.jsx';
import './Components/Menu/Menu.jsx';
import Menu from './Components/Menu/Menu.jsx';

function App() {
  return (
    <div className="Nav-container">
      <div className="Nav-Items">

        <Logo />
        <Menu />

      </div>
    </div>
  );
}

export default App;

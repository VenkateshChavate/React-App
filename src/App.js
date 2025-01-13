import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        {/* Big Heading on the Left */}
        <h1 className="navbar-heading">Azure</h1>

        {/* Navbar Menu on the Right */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button className="navbar-buttons">Home</button>
          </li>
          <li className="navbar-item">
            <button className="navbar-buttons">About</button>
          </li>
          <li className="navbar-item">
            <button className="navbar-buttons">Azure Commands</button>
          </li>
          <li className="navbar-item">
            <button className="navbar-buttons">Contact</button>
          </li>
        </ul>
      </div>
    </nav>

    {/* Azure Wallpaper Section */}
    <section className="azure-wallpaper">
      <div className="azure-text">
        <h2>Welcome to Azure Learning</h2>
        <p>Discover the world of cloud computing with Microsoft Azure!</p>
      </div>
    </section>
  </>
    );
 
  
  }

export default App;

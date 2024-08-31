import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Rightsidebar from './Rightsidebar';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-area">
        <Header />
        <Content />
      </div>
      <Rightsidebar />
    </div>
  );
}

export default App;

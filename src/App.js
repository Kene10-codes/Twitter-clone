import { Sidebar, Feed, Widgets } from './components/index';
import './App.css';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;

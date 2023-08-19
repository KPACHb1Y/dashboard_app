import './App.css';
import { AppRouter } from './components/appRouter/AppRouter';
import { MenuBar } from './components/menu/MenuBar';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

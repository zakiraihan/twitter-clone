import './App.css';

import { MainContainer, Sidebar } from './components';

import { HomePage } from './pages';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContainer showTrending={true}>
        <HomePage />
      </MainContainer>
    </div>
  );
}

export default App;

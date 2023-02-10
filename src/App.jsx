import './App.css';

import { MainContainer, ModalContainer, Sidebar } from './components';

import { HomePage } from './pages';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContainer showTrending={true}>
        <HomePage />
      </MainContainer>
      <ModalContainer />
    </div>
  );
}

export default App;

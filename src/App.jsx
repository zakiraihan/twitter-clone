import './App.css';

import { MainContainer, MessageBar, ModalContainer, Sidebar } from './components';

import { HomePage } from './views';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContainer showTrending={true}>
        <HomePage />
      </MainContainer>
      <MessageBar />
      <ModalContainer />
    </div>
  );
}

export default App;

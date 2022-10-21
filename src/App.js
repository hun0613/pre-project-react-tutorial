import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  .box {
    width: 500px;
    height: 500px;

    background-color: #ff3b3b;
  }
`;

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <Container>
        <div className="box"></div>
      </Container>
    </>
  );
}

export default App;

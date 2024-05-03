import { Header, Main, Footer, Home, Listado, About } from './components';
import './App.css';

function App() {
  return (
    <div>
      <Header>
        <h1>Hola</h1>
      </Header>
      <Main>
        <Home />
        <Listado />
        <About />
      </Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </div>
  );
}

export default App;
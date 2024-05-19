import Container from './components/Container';

function App() {
  return (
    <main>
      <Container as={'a'} onClick={() => {}} href='https://google.com'>Click me</Container>
    </main>
  );
}

export default App;

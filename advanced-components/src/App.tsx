import { useRef } from 'react';
import Input from './components/Input';

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input label="hoge" id="hoge" ref={input} />
    </main>
  );
}

export default App;

import { useRef } from 'react';
import Input from './components/Input.tsx';

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input label="test" id="test" ref={input} />
    </main>
  );
}

export default App;

import { useRef } from 'react';
import Form, { type FormHandle } from './components/Form.tsx';
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" name="name" />
        <Input type="number" label="Age" id="age" name="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;

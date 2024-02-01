import Form from './components/Form.tsx';
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
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

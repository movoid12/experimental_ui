import { useState } from 'react';
import { Button } from './examples/button/button.mist';
import { Toggle } from './examples/toggle/toggle.mist';

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Checkbox is checked:', event.target.checked);
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <div className="container mx-auto py-2 m-2 flex">
        <div className="flex-initial w-64">
          <h1 className="text-2xl m-2">Buttons</h1>
          <Button radius="lg" variant="filled">
            Click here
          </Button>
          <Button radius="lg" variant="outline">
            Click here
          </Button>
        </div>
        <div className="flex-initial w-64 bg-blue-950 px-6 py-2">
          <h1 className="text-2xl m-2 text-white ">Toggles</h1>
          <Toggle
            checked={isChecked}
            onChange={handleCheckboxChange}
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            title="check"
            role="switch"
            color='blue'
          ></Toggle>
          <label htmlFor="basic" className="pl-2 text-white">
            Check me
          </label>
        </div>
      </div>
    </>
  );
}

export default App;

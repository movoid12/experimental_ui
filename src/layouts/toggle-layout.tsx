import { useState } from 'react';
import { Toggle } from '../components/toggle/toggle.mist';

export default function ToggleLayout() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Checkbox is checked:', event.target.checked);
    setIsChecked(event.target.checked);
  };

  return (
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
        color="blue"
      />
      <label htmlFor="basic" className="pl-2 text-white">
        Check me
      </label>
      <Toggle
        onChange={() => {}}
        type="checkbox"
        id="vehicle2"
        name="vehicle2"
        value="Car"
        role="switch"
        color="blue"
        disabled
      />
      <div>
        <Toggle
          checked={isChecked}
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="Airplane"
          title="check"
          role="switch"
          color="orange"
        />
        <label htmlFor="basic" className="pl-2 text-white">
          Check me
        </label>
        <Toggle
          onChange={() => {}}
          type="checkbox"
          id="vehicle4"
          name="vehicle4"
          value="Truck"
          role="switch"
          color="orange"
          disabled
        />
      </div>
    </div>
  );
}

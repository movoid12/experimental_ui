
import ButtonsLayout from './layouts/buttons-layout';
import ToggleLayout from './layouts/toggle-layout';

function App() {
  return (
    <>
      <div className="container mx-auto py-2 m-2 flex">
        <div className="flex-initial w-64">
          <ButtonsLayout />
        </div>
        <ToggleLayout />
      </div>
    </>
  );
}

export default App;

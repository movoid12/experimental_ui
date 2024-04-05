import { Button } from '../components/button/button.mist';

export default function ButtonsLayout() {
  return (
    <>
      <h1 className="text-2xl m-2">Buttons</h1>
      <Button radius="lg" variant="filled">
        Click here
      </Button>
      <Button radius="lg" variant="outline">
        Click here
      </Button>
    </>
  );
}

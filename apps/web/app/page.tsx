import { Input } from 'ui';

export default function Page() {
  return (
    <>
      <Input name="test" value="test" setValue={(value) => console.log(value)} />
    </>
  );
}

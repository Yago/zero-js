import { useActionData } from '@remix-run/react';

export const action = async ({ request }) => {
  const body = await request.formData();
  return {
    a: body.get('a'),
    b: body.get('b'),
    result: +body.get('a') + +body.get('b'),
  };
};

const App = () => {
  const data = useActionData();

  return (
    <>
      <h1>📠 Calculateur 3000</h1>

      <form method="post">
        <input type="number" name="a" value={data?.a} />
        + <input type="number" name="b" value={data?.b} />
        = <span id="result">{data?.result ?? 0}</span>
        <input type="submit" style={{ display: 'none' }} />
      </form>
    </>
  );
};

export default App;

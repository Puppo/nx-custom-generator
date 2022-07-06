// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { ENV } from "../utils/env";

export function App() {
  return (
    <h1>Hello from {ENV.title}</h1>
  );
}

export default App;

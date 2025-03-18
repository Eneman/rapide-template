import { useState } from 'react';
import reactLogo from './assets/react.svg';
import tailwindLogo from './assets/tailwindcss.svg';
import vitestLogo from './assets/vitest.svg';
import viteLogo from './assets/vite.svg';
import typescriptLogo from './assets/typescript.svg';
import biomeLogo from './assets/biome.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img src={typescriptLogo} className="logo typescript" alt="Typescript logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="logo tailwind" alt="Tailwind logo" />
        </a>
        <a href="https://vitest.dev" target="_blank">
          <img src={vitestLogo} className="logo vitest" alt="Vitest logo" />
        </a>
        <a href="https://biomejs.dev" target="_blank">
          <img src={biomeLogo} className="logo biome" alt="Biome logo" />
        </a>
      </div>
      <h1>Vite + React + Typescript + Tailwind + Vitest + Biome</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </>
  );
}

export default App;

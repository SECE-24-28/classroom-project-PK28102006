// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import "./App.css";
// import ImpactComponent from "./Impact/impact-component";
// import FlexBoxComponent from "./flex-box/flex-box-component";
// import HelloWorldComponent from "./hello-world/hello-world-component";
// import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
// import SymbolComponent from "./symbol/symbol-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
// import ContactComponent from "./contactUs/contact.jsx";
// import PostionComponent from "./positioning/position-component";
// import ImpactComponent from "./Impact/impact-component";
// import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
// import OurPromiseComponent from "./our-promise/our-promise-component";
function App() {
  return (
    <div>
      <TrustedbyComponent />
    </div>
  );
}

export default App;

import './App.css';
import "./assets/styles/fonts.css"
import "./assets/styles/SetStyles.css"
import "./assets/styles/CustomBackground.css"
import "./assets/styles/AnimationStyles.css"
import "./assets/styles/HookStyles.css"


import { HashRouter as Router } from "react-router-dom"
import AssemblyRouted from './routes/AssemblyRouted';

function App() {
  return (

    <Router>
      <div className="App">
        <AssemblyRouted />
      </div>
    </Router>
  );
}

export default App;

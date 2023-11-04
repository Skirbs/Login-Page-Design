import "./App.css";

import BackgroundComponent from "./components/Background/BackgroundComponent";
import MainLogin from "./components/MainLogin/MainLogin";

function App() {
  return (
    <div className="inline-block md:flex items-stretch min-h-screen">
      <MainLogin />
      <BackgroundComponent />
    </div>
  );
}

export default App;

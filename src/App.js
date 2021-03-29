import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    <div className="wrapper">
      <Header /> 
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;

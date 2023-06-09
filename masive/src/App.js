import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Gamepopuler from "./components/Gamepopuler"
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* intri section */}
      <div className="myBG">
      <NavigationBar />
      <Intro/>  
      </div>
      {/* end of intro */}

      {/* intro game populer */}
      <div className="game populer">
        <Gamepopuler/>
      </div>
      {/* end of game populer section */}
    </div>
  )
}

export default App;

import "./App.css";
import CallButton from "./comps/CallButton";
import Directory from "./comps/Directory";
import SecondBanner from "./comps/SecondBanner";
import Services from "./comps/Services";
import TopBanner from "./comps/TopBanner";

function App() {
  return (
    <div className="app_container">
      <CallButton />
      <TopBanner />
      <SecondBanner />
      <Services />
      <Directory />
    </div>
  );
}

export default App;

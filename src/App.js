import "./App.css";
import CallButton from "./comps/CallButton";
import Directory from "./comps/Directory";
import SecondBanner from "./comps/SecondBanner";
import Services from "./comps/Services";
import ServicesWithPoints from "./comps/ServicesWithPoints";
import TopBanner from "./comps/TopBanner";
import WebTitle from "./comps/WebTitle";

function App() {
  return (
    <div className="app_container">
      <WebTitle />
      <CallButton />
      <TopBanner />
      <SecondBanner />
      <Services />
      <ServicesWithPoints />
      <Directory />
    </div>
  );
}

export default App;

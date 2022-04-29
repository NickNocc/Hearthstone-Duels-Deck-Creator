import "./App.css";
import HeroSelect from "./components/Heroes";
import { Navbar } from "./components/Navbar";

function App(props) {
  return (
    <>
      <Navbar></Navbar>
      <HeroSelect></HeroSelect>
    </>
  );
}

export default App;

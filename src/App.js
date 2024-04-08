import "./App.css";
import Central from "./components/central-component/central";
import LeftMenu from "./components/leftMenu/leftMenu";
import NavBar from "./components/navbar/nav";

function App() {
  return (
    <div class="flex justify-between bg-white">
      <div class="w-1/1">
        <LeftMenu />
      </div>

      <div class="ml-96">
        <Central className="" />
      </div>

      <div class="w-1/1">
        <NavBar className="" />
      </div>
    </div>
  );
}

export default App;

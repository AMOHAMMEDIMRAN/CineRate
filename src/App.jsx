import { Outlet } from "react-router-dom";
import Movies from "./components/Movies";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default App;

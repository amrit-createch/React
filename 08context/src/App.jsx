import "./App.css";
import Usercontextprovider from "./context/Usercontextprovider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <Usercontextprovider>
      <h1>React 😎😎😎</h1>
      <Login />
      <Profile />
    </Usercontextprovider>
  );
}

export default App;

import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { BrowserRouter } from "react-router-dom";

function App() {
  const loggedIn = localStorage.jwt !== undefined;

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content loggedIn={loggedIn} />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

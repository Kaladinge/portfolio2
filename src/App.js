import "./sass/style.scss";
import HomePage from "./components/home/HomePage";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="WordCon" aboutText="About This App" />
      <hr />
      <div className="container">
        <TextForm heading="Enter The Text Below" />
      </div>
    </>
  );
}

export default App;

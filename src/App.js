import "./App.css"
import TextForm from "./components/TextForm";
import DarkLight from "./components/DarkLight";


function App() {
  return (
    <>
      <DarkLight className="toggle" />
      <TextForm heading="Enter The Text Below" > </TextForm>
    </>
  );
}

export default App;

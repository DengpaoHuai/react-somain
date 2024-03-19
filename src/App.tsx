import "./App.css";
import CustomCardComponent from "./components/CustomCardComponent";

function App() {
  return (
    <>
      <CustomCardComponent title="title" footer="footer">
        <p>This is the first card</p>
      </CustomCardComponent>
    </>
  );
}

export default App;

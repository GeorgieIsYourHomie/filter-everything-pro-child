import "./App.css";
import { createRoot } from "react-dom/client";
import StopFilterLoadAnimation from "./StopFilterLoadAnimation";

function App() {
  return (
    <>
      <StopFilterLoadAnimation />
    </>
  );
}

const root = createRoot(document.getElementById("filter-everything-child-plugin")); // Matching the ID with index.html
root.render(<App />);

export default App;

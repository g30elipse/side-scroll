import * as React from "react";
import { render } from "react-dom";
import SideScroll from "./SideScroll";

import "./styles.css";

function App() {
  const ITEMS = [{ label: "Home" }, { label: "Home" }, { label: "Home" }];
  const [index, setIndex] = React.useState(0);

  return (
    <div className="App">
      <SideScroll
        currentValue={index}
        items={ITEMS}
        onClick={(item, i) => setIndex(i)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

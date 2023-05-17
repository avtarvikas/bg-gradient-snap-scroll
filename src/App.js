import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ScrollingSections from "./ScrollingSections";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollY } = window;
      setScrollPosition(scrollY);
    });
  }, [scrollPosition]);
  const gradientAngle = `${scrollPosition / window.innerHeight}rad`;
  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(${gradientAngle}, #e2ce1b 0%, #f08b07 51%, #e42ddb 75%)`,
      }}
    >
      <ScrollingSections />
    </div>
  );
}

export default App;

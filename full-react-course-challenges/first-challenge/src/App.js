import { useState } from "react";
import AddColor from "./components/AddColor";
import ColorBox from "./components/ColorBox";

function App() {
  const [addColor, setAddColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <main>
      <ColorBox
        addColor={addColor}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <AddColor
        addColor={addColor}
        setAddColor={setAddColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  );
}

export default App;


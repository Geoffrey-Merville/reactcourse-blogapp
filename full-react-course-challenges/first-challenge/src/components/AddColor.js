import colorNames from "colornames";

const AddColor = ({
  addColor,
  setAddColor,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form className="addForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="addForm">Add Color Name</label>
      <input
        autoFocus
        required
        type="text"
        placeholder="Add color name"
        value={addColor}
        onChange={(e) => {
          setAddColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default AddColor;

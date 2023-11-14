const ColorBox = ({ addColor, hexValue, isDarkText }) => {
  return (
    <section
      className="colorBox"
      style={{ backgroundColor: addColor, color: isDarkText ? "#000" : "#FFF" }}
    >
      <p>{addColor ? addColor : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

ColorBox.defaultProps = {
  color: "Empty Color Value",
};

export default ColorBox;

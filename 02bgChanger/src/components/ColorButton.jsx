import PropTypes from "prop-types";

function ColorButton({ color, text, onclick, textColor = "white" }) {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <button
        className="px-4 py-2 text-white rounded-full"
        style={{ backgroundColor: color, color: textColor }}
        onClick={onclick}
      >
        {capitalize(text)}
      </button>
    </>
  );
}

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  textColor: PropTypes.string,
};

export default ColorButton;

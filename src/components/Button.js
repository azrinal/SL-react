const Button = ({ color, text }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "Add",
};

export default Button;

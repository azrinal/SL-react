import Button from "./Button";

const Header = ({ title, color, text }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={color} text={text} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;

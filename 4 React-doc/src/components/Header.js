var headerStyle = {
  color: "orange",
  fontWeight: "bold",
  textSize: "1.2rem",
  textAlign: "center",
};
var date = new Date();
var day = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();

function Header() {
  return (
    <div style={{ backgroundColor: "purple" }}>
      <h1 style={headerStyle}>First React APP</h1>
      <h2
        style={{ color: "yellow", textAlign: "center" }}
      >{`Date: ${day}/${month}/${year}`}</h2>
    </div>
  );
}

export default Header;

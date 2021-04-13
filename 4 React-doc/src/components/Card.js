// var name = prompt("Name");
// var age = prompt("Age");
//var name = "Jubair";
//var age = "20";
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();

function Card(props) {
  // receiving data from props objects
  // destructuring the onject
  const { name, age } = props;
  return (
    <div className="info">
      <h4>{`Name: ${name}`}</h4>
      <h4>{`Age: ${age}`}</h4>
      <p className="timeSyle para-style">{`Time: ${hour}:${min}`}</p>
    </div>
  );
}
export default Card;

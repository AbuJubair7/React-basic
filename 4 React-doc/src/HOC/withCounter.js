import React from "react";

/*
this class takes the main component as parameter.
Then create a class component which return the main component.
The main functionality will be inside the class component.
Then the functional component return that Class component
Note: the function return the Class/ object template not the class object
In JavaScript we can return the template.
*/
export default function withCounter(OriginalComponent) {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };
    increament = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <div>
          {" "}
          <OriginalComponent
            count={this.state.count}
            counter={this.increament}
          />{" "}
        </div>
      );
    }
  }

  return NewComponent;
}

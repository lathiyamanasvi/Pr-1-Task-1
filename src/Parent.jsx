import Child from "./Child";
const { Component } = require("react");

class Parents extends Component {
  constructor() {
    super();
    this.data = [
      {
        grid: 1,
        name: 'kishan',
        email: 'kishan@gmail.com',
        password: 'kishan@123',
        course: ["html, css, bootstrap, js"],
        city: "surat",
        color: "#C48793"
      },
      {
        grid: 2,
        name: 'jay',
        email: 'jay@gmail.com',
        password: 'kishan@123',
        course: ["photosho, figma, illustrator, adobe xd"],
        city: "rajkot",
        color: "#D58A94"

      },
      {
        grid: 3,
        name: 'ajay',
        email: 'ajay@gmail.com',
        password: 'ajay@123',
        course: ["html, css, bootstrap, nodejs"],
        city: "amareli",
        color: "#C48793"
      },
      {
        grid: 4,
        name: 'nisha',
        email: 'nisha@gmail.com',
        password: 'nisha@123',
        course: ["html, css, bootstrap, python"],
        city: "vadodara",
        color: "#D58A94"
      }

    ]
  }
  render() {
    return (
      <>
        <Child record={this.data} />
      </>
    )

  }
}

export default Parents;
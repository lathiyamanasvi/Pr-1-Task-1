const { Component } = require("react");

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Allrecord: this.props.record
    }
  }
  render() {
    return (
      <center>
        <h1>Student Details</h1>
        <table border={1}>
        <thead>
          <tr>
            <th scope="col">Grid</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Course</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.Allrecord.map((val) => {
              return (
                <tr>
                  <td style={{ background: val.color }}>{val.grid}</td>
                  <td style={{ background: val.color }}>{val.name}</td>
                  <td style={{ background: val.color }}>{val.email}</td>
                  <td style={{ background: val.color }}>{val.password}</td>
                  <td style={{ background: val.color }}>{val.course}</td>
                  <td style={{ background: val.color }}>{val.city}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </center>
    )
  }
}

export default Child;
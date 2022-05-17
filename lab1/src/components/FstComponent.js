import { Component } from "react";


class FstComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "yaya",
    };
  }
   clearing=()=>{
   this.setState({
     name: "",
   });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>this is the first component</p>
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          ></input>
          <br />
          {this.state.name}{" "}
          <button className="btn btn-sm btn-success m-2" onClick={this.clearing}>
            Clear
          </button>
        </header>
      </div>
    );
  }
}

export default FstComponent;

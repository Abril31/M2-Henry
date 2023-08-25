import React from "react";
import { alerts } from "./Bienvenido";

class Botones extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button onClick={() => alert(alerts.m1)}>{this.props.texto1}</button>

        <button onClick={() => alert(alerts.m2)}>{this.props.texto2}</button>
      </>
    );
  }
}
export default Botones;

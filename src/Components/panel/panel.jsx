import React, { Component } from "react";
import s from "./panel.module.css";

class Panel extends Component {
  render() {
    const { onGood, onNeutral, onBad } = this.props;
    return (
      <div className={s.container}>
        <button className={s.button} type="button" onClick={onGood}>
          Good
        </button>
        <button className={s.button} type="button" onClick={onNeutral}>
          Neutral
        </button>
        <button className={s.button} type="button" onClick={onBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default Panel;

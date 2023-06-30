import React, { Component } from "react";
import { render } from "react-dom";
import "../css/vis.css";
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const defaultState = {
  order: [0, 3, 1, 2],
  blocks: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3}]
};

const link = ["https://editor.p5js.org/HXMou/embed/5LOoD5I4a", 
"https://editor.p5js.org/HXMou/embed/cMNgGu8hY",
"https://editor.p5js.org/HXMou/embed/xjSOBGUeH",
"https://editor.p5js.org/HXMou/embed/y0ruVGAPx"];

const chinese = ["鼠标在水平方向上的移动将影响音乐信号的频率，键盘上的上下移动键则将控制信号延迟时间。",
"点击并拖动鼠标，其左右和上下移动分别影响音乐信号的音量大小和速率。",
"点击画面以启动振荡器",
"点击画面以开始音乐。"];

const discribe = ["The horizontal movement of the mouse affects the frequency of the music. Use the up and down keys on keyboard to alter delay-time of mousic.",
"Drag the mouse, movement in the horizontal direction affects the volume of the music, movement in the vertical direction controls playback rate of the music.",
"Click to start the oscillator.",
"Click to play the music and see the waveform."];

class Vis extends Component {

  constructor(props) {
    super(props);
    this.state = this.state || defaultState;
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }

  moveUp(index) {
    console.log(index);
    this.setState((state) => {
      let b = state.order;
      let moving_block = b.splice(index, 1)[0];
      state.order = [
        ...b.slice(0, index - 1),
        moving_block,
        ...b.slice(index - 1)
      ];
      console.log(state.order);
      return state;
    });
  }

  moveDown(index) {
    console.log(index);
    this.setState((state) => {
      let b = state.order;
      let moving_block = b.splice(index, 1)[0];
      state.order = [
        ...b.slice(0, index + 1),
        moving_block,
        ...b.slice(index + 1)
      ];
      console.log(state.order);
      return state;
    });
  }

  render() {
    const blocks = this.state.blocks.map((item, index) => {
      let order = this.state.order.indexOf(item.id);
      console.log(order);
      return (
        <div
          key={item.id}
          className={"block block-" + item.id + " order-" + order}
        >
          Block #{item.id}
          <Typography>
          <Paragraph>
             {chinese[item.id]}
            </Paragraph>
            <Paragraph>
             {discribe[item.id]}
            </Paragraph>
          </Typography>
          <iframe
            style={{width:'840', height:'660', overflow:'visible'}}
            width="100%"
            height="660"
            scrolling="no"
            src={link[item.id]}
            frameBorder="0"
          />
          <button onClick={() => this.moveUp(order)}>UP</button>
          <button onClick={() => this.moveDown(order)}>DOWN</button>
        </div>
      );
    });

    return <div className="blocks">{blocks}</div>;
  }
}

render(<Vis />, document.getElementById("root"));

export default Vis;
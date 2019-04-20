import React, {Component} from 'react';

export class AddFormPlayer extends React.Component {
  state = {
    value: '밸류 기본값'
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    // submit의 기본이벤트(새로고침) 막기
    e.preventDefault();
    // 콜백함수 호출
    this.props.addPlayer(this.state.value);
    // 빈값으로 초기화
    this.setState({value:'밸류 초기화'})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleValueChange}
               placeholder="enter a player's name"/>
        <input type="submit" value="Add Player"/>
      </form>
    )
  }
}

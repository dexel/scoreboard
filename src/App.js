import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddFormPlayer} from "./components/AddFormPlayer";

class App extends React.Component {
  state = {
    players: [
      {name: '가나다', score: 100, id: 1},
      {name: '라마바', score: 100, id: 2},
      {name: '사아자', score: 100, id: 3},
      {name: '차카타', score: 100, id: 4},
      {name: '파하', score: 100, id: 5},
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  // 스코어 증가, 감소 콜백 함수
  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      const player = prevState.players.find(item => item.id === id);
      player.score = player.score + delta;
      return {
        players: [...prevState.players]
      }
    })
  }

  handleAddPlayer = (name) => {
    console.log(name)
    this.setState(prevState => {
      players: [...prevState.players, {id: this.maxId + 1, score: 100, name: name}]
  })
}


render()
{
  return (
    <div className='scoreboard'>
      <Header title="My ScoreBoard" players={this.state.players}/>
      {this.state.players.map(x => <Player name={x.name} removePlayer={this.handleRemovePlayer} id={x.id} key={x.id}
                                           score={x.score} changeScore={this.handleChangeScore}/>)}
      <AddFormPlayer addPlayer={this.handleAddPlayer}/>
    </div>
  )
}
}

export default App;

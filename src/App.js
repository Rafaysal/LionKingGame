import React from 'react';
import {Link} from 'react-router-dom'
import {Main} from '/Users/rafaysalahuddin/Portfolio/river/src/Main.js'
import {Start} from '/Users/rafaysalahuddin/Portfolio/river/src/Start.js'
import {LevelUp} from '/Users/rafaysalahuddin/Portfolio/river/src/LevelUp.js'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      level1: true
    }
    this.nextLevel=this.nextLevel.bind(this)
  }
  nextLevel(){
    this.setState({level1: !this.state.level1})
  }

  render(){
  return (<div>
      {this.state.level1?(<Start level2={this.state.level2} nextLevel = {this.nextLevel}/>):(
      <LevelUp level2={this.state.level2} nextLevel = {this.nextLevel}/>
      )}
     
    </div>);
}
}

export default App;
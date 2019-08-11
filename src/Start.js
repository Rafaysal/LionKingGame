import React from 'react';

import hyenaVoice from '/Users/rafaysalahuddin/Portfolio/river/src/images/hyena.mp3'
import king from '/Users/rafaysalahuddin/Portfolio/river/src/images/I-just-can-t-wait-to-be-king-the-lion-king-lyrics.mp3'
import timonVoice from '/Users/rafaysalahuddin/Portfolio/river/src/images/Whoah-NiceOne-Studio.wav'
import './App.css';
import river from '/Users/rafaysalahuddin/Portfolio/river/src/images/bg.gif'
import timon from '/Users/rafaysalahuddin/Portfolio/river/src/images/timon.png'
import pumba from '/Users/rafaysalahuddin/Portfolio/river/src/images/pumba.png'
import hyena from '/Users/rafaysalahuddin/Portfolio/river/src/images/hyena.png'
import rock from '/Users/rafaysalahuddin/Portfolio/river/src/images/rock.png'
import simba from '/Users/rafaysalahuddin/Portfolio/river/src/images/simba.png'
import boat from '/Users/rafaysalahuddin/Portfolio/river/src/images/boat.png'
import pumbaVoice from '/Users/rafaysalahuddin/Portfolio/river/src/images/pumba.wav'
import roar from '/Users/rafaysalahuddin/Portfolio/river/src/images/(deep-roar)-[AudioTrimmer.com].mp3'
import scroll from '/Users/rafaysalahuddin/Portfolio/river/src/images/scroll.png'
import logo from '/Users/rafaysalahuddin/Portfolio/river/src/images/logo.png'
import {Link} from 'react-router-dom'
import {Main} from '/Users/rafaysalahuddin/Portfolio/river/src/Main.js'
import plank from '/Users/rafaysalahuddin/Portfolio/river/src/images/plank.png'

export class Start extends React.Component{
  constructor(){
    super()
    this.state = 
    {occupants:0, left: false, right: false, 
    timonLeft: 67, timonTop: 73, timonBoat: false, timonRock: true,
    hyenaLeft: 55, hyenaTop: 74, hyenaBoat: false, hyenaRock: true,
    pumbaLeft: 84, pumbaTop: 65, pumbaBoat: false, pumbaRock: true,
    simbaLeft: 74, simbaTop: 67, simbaBoat: false, simbaRock: true,
    boatTop: 86, boatRock: true, inMotion: false, clicks: 0,
    rules: true, victory: false, instructions:false, mute: false}

    this.moveHyena=this.moveHyena.bind(this)
    this.moveTimon=this.moveTimon.bind(this)
    this.moveSimba=this.moveSimba.bind(this)
    this.movePumba=this.movePumba.bind(this)
    this.goUp=this.goUp.bind(this)
    this.goDown=this.goDown.bind(this)
    this.hideLanding=this.hideLanding.bind(this)
    this.toggleInstructions=this.toggleInstructions.bind(this)
    this.toggleMute=this.toggleMute.bind(this)
    this.playMusic=this.playMusic.bind(this)
  }

  
  
  
  moveTimon(){
    if(!this.state.inMotion && this.state.timonRock===this.state.boatRock){
    
    let change1
    
    if(this.state.right&&!this.state.timonBoat&&this.state.occupants<2&&!this.state.hyenaBoat){
      change1 = this.state.timonLeft - 40;
      this.setState({left: !this.state.left})
    }else if(this.state.left&&!this.state.timonBoat&&this.state.occupants<2&&!this.state.hyenaBoat){
      change1 = this.state.timonLeft - 20;
      this.setState({right: !this.state.right})
    }else if(!this.state.timonBoat&&this.state.occupants<2&&!this.state.hyenaBoat){
      change1 = this.state.timonLeft - 40;
      this.setState({left: !this.state.left})
    }

    if(!this.state.timonBoat&&this.state.occupants<2&&!this.state.hyenaBoat){
    let timon = document.getElementById('timon');
    new Audio(timonVoice).play()
    
    

    this.setState({timonLeft: change1});
    let num1 = change1.toString()
    let newLeft1 = num1.concat('%')
    timon.style.left = newLeft1;
    let newOccupants1 = this.state.occupants + 1;
    this.setState({timonBoat: true, occupants:newOccupants1});
    this.setState({clicks: this.state.clicks+1})
    
    
  } else if(this.state.timonBoat){
    let timon = document.getElementById('timon');
    this.state.timonLeft===27?this.setState({left: !this.state.left}):this.setState({right: !this.state.right});
    this.setState({timonLeft: 67});
    timon.style.left = '67%';
    let newOccupants1 = this.state.occupants - 1;
    this.setState({timonBoat: false, occupants:newOccupants1});
    this.setState({clicks: this.state.clicks+1})
    
  }
}else{
  alert("Timon can't be moved right now")
}
}

moveHyena(){
  if(!this.state.inMotion && this.state.hyenaRock===this.state.boatRock){
  let change2
    
    if(this.state.right&&!this.state.hyenaBoat&&this.state.occupants<2&&!this.state.timonBoat&&!this.state.simbaBoat){
      change2 = this.state.hyenaLeft - 30;
      this.setState({left: !this.state.left})
    }else if(this.state.left&&!this.state.hyenaBoat&&this.state.occupants<2&&!this.state.timonBoat&&!this.state.simbaBoat){
      change2 = this.state.hyenaLeft - 10;
      this.setState({right: !this.state.right})
    }else if(!this.state.hyenaBoat&&this.state.occupants<2&&!this.state.timonBoat&&!this.state.simbaBoat){
      change2 = this.state.hyenaLeft - 30;
      this.setState({left: !this.state.left})
    }

  if(!this.state.hyenaBoat&&this.state.occupants<2&&!this.state.timonBoat&&!this.state.simbaBoat){
  let hyena = document.getElementById('hyena');
  new Audio(hyenaVoice).play()

  

  this.setState({hyenaLeft: change2});
  let num2 = change2.toString()
  let newLeft2 = num2.concat('%') 
  hyena.style.left = newLeft2;
  let newOccupants2 = this.state.occupants+1;
  this.setState({hyenaBoat: true, occupants:newOccupants2});
  hyena.style.zIndex = -3;
  this.setState({clicks: this.state.clicks+1})
} else if(this.state.hyenaBoat){
  let hyena = document.getElementById('hyena');
  this.state.hyenaLeft===25?this.setState({left: !this.state.left}):this.setState({right: !this.state.right});
  this.setState({hyenaLeft: 55});
  this.setState({clicks: this.state.clicks+1})
  hyena.style.left = '55%';
  let newOccupants2 = this.state.occupants-1
  this.setState({hyenaBoat: false, occupants: newOccupants2});
  
  hyena.style.zIndex = -1;
  }
  }else{
    alert("Shenzi can't be moved right now")
  }
}

movePumba(){
  if(!this.state.inMotion && this.state.pumbaRock===this.state.boatRock){
  let change4
  
  if(this.state.right&&!this.state.pumbaBoat&&this.state.occupants<2){
    change4 = this.state.pumbaLeft - 57;
    this.setState({left: !this.state.left})
  }else if(this.state.left&&!this.state.pumbaBoat&&this.state.occupants<2){
    change4 = this.state.pumbaLeft - 40;
    this.setState({right: !this.state.right})
  }else if(!this.state.pumbaBoat&&this.state.occupants<2){
    change4 = this.state.pumbaLeft - 57;
    this.setState({left: !this.state.left})
  }

  if(!this.state.pumbaBoat&&this.state.occupants<2){
  let pumba = document.getElementById('pumba');
  new Audio(pumbaVoice).play()

  

  this.setState({pumbaLeft: change4});
  let num4 = change4.toString()
  let newLeft4 = num4.concat('%')
  pumba.style.left = newLeft4;
  let newOccupants4 = this.state.occupants + 1;
  this.setState({pumbaBoat: true, occupants:newOccupants4});
  this.setState({clicks: this.state.clicks+1})
  
} else if(this.state.pumbaBoat){
  let pumba = document.getElementById('pumba');
  this.state.pumbaLeft===27?this.setState({left: !this.state.left}):this.setState({right: !this.state.right});
  this.setState({pumbaLeft: 84});
  pumba.style.left = '84%';
  let newOccupants4 = this.state.occupants - 1;
  this.setState({pumbaBoat: false, occupants:newOccupants4});
  this.setState({clicks: this.state.clicks+1})

  if(!this.state.timonRock&&!this.state.simbaRock&&!this.state.hyenaRock&&!this.state.pumbaRock){
    this.setState({victory: true})
    this.setState({rules: true})
    
       console.log('You win')
  }
  }
  }else{
    alert("Pumba can't be moved right now")
  }
}


moveSimba(){
  if(!this.state.inMotion && this.state.simbaRock===this.state.boatRock){
  let change3
    
    if(this.state.right&&!this.state.simbaBoat&&this.state.occupants<2&&!this.state.hyenaBoat){
      change3 = this.state.simbaLeft - 46;
      this.setState({left: !this.state.left})
    }else if(this.state.left&&!this.state.simbaBoat&&this.state.occupants<2&&!this.state.hyenaBoat){
      change3 = this.state.simbaLeft - 29;
      this.setState({right: !this.state.right})
    }else if(!this.state.simbaBoat&&this.state.occupants<2&&!this.state.hyenaBoat){
      change3 = this.state.simbaLeft - 46;
      this.setState({left: !this.state.left})
    }
  let simba = document.getElementById('simba');

  if(!this.state.simbaBoat&&this.state.occupants<2&&!this.state.hyenaBoat){
  new Audio(roar).play()

  

  this.setState({simbaLeft: change3});
  let num3 = change3.toString()
  let newLeft3 = num3.concat('%') 
  simba.style.left = newLeft3;
  let newOccupants3 = this.state.occupants+1;
  this.setState({simbaBoat: true, occupants:newOccupants3});
  this.setState({clicks: this.state.clicks+1})
 
} else if(this.state.simbaBoat){ 
  this.setState({simbaLeft: 74});
  this.state.simbaLeft===28?this.setState({left: !this.state.left}):this.setState({right: !this.state.right});
  simba.style.left = '74%';
  let newOccupants3 = this.state.occupants-1
  this.setState({simbaBoat: false, occupants: newOccupants3});
  this.setState({clicks: this.state.clicks+1})
}
  }else{
    alert("Simba can't be moved right now")
  }
}

goUp(e){
  if(this.state.pumbaBoat){
  let timon = document.getElementById('timon')
  let hyena = document.getElementById('hyena')
  let pumba = document.getElementById('pumba')
  let simba = document.getElementById('simba')
  let iterations = 0;
  let boat = document.getElementById('boat')
  let check = true
  
  if(this.state.timonBoat===false&&this.state.hyenaBoat===false&&(this.state.simbaBoat===true||this.state.simbaRock===false)&&(this.state.pumbaBoat===true||this.state.pumbaRock===false)&&this.state.timonRock===this.state.hyenaRock){
    if(!this.state.timonRock&&!this.state.hyenaRock&&!this.state.simbaRock&&this.state.pumbaRock){
        check=true;
    }else{
    check = false;
    alert("You can't leave Timon and Shenzi alone!")
    }
    }
  else if((this.state.timonBoat===true||this.state.timonRock===false)&&this.state.hyenaBoat===false&&this.state.simbaBoat===false&&(this.state.pumbaBoat===true||this.state.pumbaRock===false)&&this.state.simbaRock===this.state.hyenaRock){
    if(!this.state.timonRock&&!this.state.hyenaRock&&!this.state.simbaRock&&this.state.pumbaRock){
        check=true;
    }else{
    check = false;
    alert("You can't leave Timon and Shenzi alone!")
    }
    }


  if(this.state.occupants!==0&&check===true){
  this.setState({inMotion: true})
  boat.style.zIndex = -2
  e.target.style.visibility = "hidden"
  
  let interval = setInterval(()=>{
    
    if(this.state.timonBoat){
      timon.style.zIndex=-3
      let num6 = this.state.timonTop - 0.1;
      let newTimonTop = num6.toString().concat('%')
      this.setState({timonTop: num6, timonRock: false})
       timon.style.top = newTimonTop;
    }
    

    if(this.state.hyenaBoat){
      hyena.style.zIndex=-3
      let num7 = this.state.hyenaTop - 0.1;
      
      let newHyenaTop = num7.toString().concat('%')
      this.setState({hyenaTop: num7, hyenaRock: false})
       hyena.style.top = newHyenaTop;
    }

    if(this.state.pumbaBoat){
      pumba.style.zIndex=-3
      let num8 = this.state.pumbaTop - 0.1;
      let newPumbaTop = num8.toString().concat('%')
      this.setState({pumbaTop: num8, pumbaRock: false})
       pumba.style.top = newPumbaTop;
    } 
    if(this.state.simbaBoat){
      simba.style.zIndex=-3
      let num9 = this.state.simbaTop - 0.1;
      let newSimbaTop = num9.toString().concat('%')
      this.setState({simbaTop: num9, simbaRock: false})
       simba.style.top = newSimbaTop;
    }
   
    let num5 = this.state.boatTop - 0.1;
    let newBoatTop = num5.toString().concat('%')
    this.setState({boatTop: num5})
    boat.style.top = newBoatTop;
    iterations++

    if(iterations>=320){
      clearInterval(interval)
      this.setState({boatRock:false})
      this.setState({inMotion: false})
    }
  
  },1)
}else if(this.state.occupants===0){
  alert('No passengers on board! Click one of the characters to add them.')
}}else{
  alert('You need Pumba to row the boat')
}

}

goDown(e){
  if(this.state.pumbaBoat){
  let boat2 = document.getElementById('boat')
  let iterations2 = 0; 
  let timon = document.getElementById('timon')
  let hyena = document.getElementById('hyena')
  let pumba = document.getElementById('pumba')
  let simba = document.getElementById('simba')

    
  let check = true
  
  if(this.state.timonBoat===false&&this.state.hyenaBoat===false&&(this.state.simbaBoat===true||this.state.simbaRock===true)&&(this.state.pumbaBoat===true||this.state.pumbaRock)&&this.state.timonRock===this.state.hyenaRock){
    check = false;
    alert("You can't leave Timon and Shenzi alone!")
  }else if((this.state.timonBoat===true||this.state.timonRock===true)&&this.state.hyenaBoat===false&&this.state.simbaBoat===false&&(this.state.pumbaBoat===true||this.state.pumbaRock===true)&&this.state.simbaRock===this.state.hyenaRock){
    check = false;
    alert("You can't leave Simba and Shenzi alone!")
  }

  if(this.state.occupants!==0&&check===true){

  this.setState({inMotion: true})
  e.target.style.visibility = "hidden"

  let interval2 = setInterval(()=>{

    if(this.state.timonBoat){
      timon.style.zIndex=-3
      let num10 = this.state.timonTop + 0.1;
      let newTimonTop = num10.toString().concat('%')
      this.setState({timonTop: num10, timonRock: true})
       timon.style.top = newTimonTop;
    }
    if(this.state.hyenaBoat){
      
      hyena.style.zIndex=-3
      let num11 = this.state.hyenaTop + 0.1;
      let newHyenaTop = num11.toString().concat('%')
      this.setState({hyenaTop: num11, hyenaRock: true})
       hyena.style.top = newHyenaTop;
    }
    if(this.state.pumbaBoat){
      pumba.style.zIndex=-3
      let num12 = this.state.pumbaTop + 0.1;
      let newPumbaTop = num12.toString().concat('%')
      this.setState({pumbaTop: num12, pumbaRock: true})
       pumba.style.top = newPumbaTop;
    } 
    if(this.state.simbaBoat){
      simba.style.zIndex=-3
      let num13 = this.state.simbaTop + 0.1;
      let newSimbaTop = num13.toString().concat('%')
      this.setState({simbaTop: num13, simbaRock: true})
       simba.style.top = newSimbaTop;
    }

    let num6 = this.state.boatTop + 0.1;
    let newBoatTop2 = num6.toString().concat('%')
    this.setState({boatTop: num6})
    boat2.style.top = newBoatTop2;
    iterations2++
    if(iterations2>=320){
      this.setState({inMotion: false})
      clearInterval(interval2)
      boat2.style.zIndex = 2;
      this.setState({boatRock:true})
    }
  },1)}
  else if(this.state.occupants===0){
    alert('No passengers on board! Click one of the characters to add them.')
  }
}
  else{
    alert('You need Pumba to row the boat')
  }

}

hideLanding(){
  this.setState({rules:false})
  document.getElementById("my_audio").play();
}

toggleInstructions(){
    this.setState({instructions: !this.state.instructions})
}



toggleMute(){
    
    if(!this.state.mute){
    document.getElementById("my_audio").pause();
    this.setState({mute: true})
    }else{
    document.getElementById("my_audio").play();
    this.setState({mute: false})
    }
}

playMusic(){
    
}


  render(){

  return (<div className = "container">
      
      <audio id="my_audio" src={king} loop="loop"></audio>

      {this.state.rules?(<div><img id= "scroll" src = {scroll}/>
      <img className = "logo" src = {logo}/>
      <div id = "instruction">
          
          
          {this.state.victory?(<div><div>CONGRATS, YOU SAVED EVERYONE!! Unfortunately, Simba and co.
            have landed themselves in danger once again. This time however, everyone can row the boat
            and is happy to sit with each other.</div>
            <br/>
            <div>
              The boat won't hold much longer and everyone needs to get across in 17 minutes. However,
              because of their weight, the boat travels across at different speeds.
            </div>
            <br/>
            <ul>
              <li>Timon can get the boat across in 1 minute</li>
              <li>Shenzi can get the boat across in 2 minutes</li>
              <li>Simba can get the boat across in 5 minutes</li>
              <li>Pumba can get the boat across in 10 minutes</li>
            </ul>
            <br/>
            <div>When there are two passengers on the boat, it will only travel
              as fast as the slower passenger. Thus if Pumba and Timon are on the
              boat it will get across in 10 minutes!
            </div>
            <button id = "level2" onClick = {this.props.nextLevel}>Level 2</button>
           
          </div>):(<div>
            
          <div>HELP! Simba, Pumba, Timon and Shenzi(hyena) are stranded on a rock!</div>
          <br/>
          <div>There is one boat available that can bring them back to safety, however:</div>
          <br/>
          <ul>
            <li>Pumba is the only one who can row the boat</li>
            <li>Only two animals can go on the boat at a time</li>
            <li>You can not leave Shenzi alone with Simba</li>
            <li>You can not leave Timon alone with Shenzi</li>
          </ul>
          <br/>
          <div>Click on characters to move them in and out of the boat. Good luck!</div>
          <button onClick = {this.hideLanding} id="level1">LEVEL 1</button>
          </div>)}
      </div>
      </div>):undefined}


      {this.state.instructions?(<div><img id= "scroll" src = {scroll}/>
      <img className = "logo" src = {logo}/>
      <div id = "instruction">
      <div>
            
            <div>HELP! Simba, Pumba, Timon and Shenzi(hyena) are stranded on a rock!</div>
            <br/>
            <div>There is one boat available that can bring them back to safety, however:</div>
            <br/>
            <ul>
              <li>Pumba is the only one who can row the boat</li>
              <li>Only two animals can go on the boat at a time</li>
              <li>You can not leave Shenzi alone with Simba</li>
              <li>You can not leave Timon alone with Shenzi</li>
            </ul>
            <br/>
            <div>Click on characters to move them in and out of the boat. Good luck!</div>
            <button onClick = {this.toggleInstructions} id="level1">CONTINUE</button>
            </div>

            </div>
            </div>):undefined}

      <img className = "river" src = {river}/>
      <img className = "plank" src = {plank}/>
      <button onClick = {this.toggleInstructions} className="instructionPage">Instructions</button>

      <img className = "plank" src = {plank}/>
      <button onClick = {this.toggleMute} className="mute">Mute music</button>

      <button onClick = {this.props.nextLevel} className="level">Go to Level 2</button>

      <h1>Moves: {this.state.clicks}</h1>
      <img id = "boat"  src = {boat}/>
      <img id = "timon" onClick = {this.moveTimon} src = {timon}/>
      <img id = "hyena" onClick = {this.moveHyena} src = {hyena}/>
      <img id = "pumba" onClick = {this.movePumba} src = {pumba}/>
      <img id = "simba" onClick = {this.moveSimba} src = {simba}/>
      
      <img className = "rock" src = {rock}/>
      {this.state.boatRock?<button onClick = {this.goUp} className = "goUp">GO UP</button>:null}
      {this.state.boatRock?null:<button onClick = {this.goDown} className = "goDown">GO DOWN</button>}
    </div>);
}
}



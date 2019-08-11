import React from 'react'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import {LevelUp} from './LevelUp'


export const Main = () => {
return (<Switch>

<Route path = '/levelUp' component = {LevelUp}></Route>
</Switch>)
}
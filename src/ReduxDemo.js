import React, {Component} from 'react';
import { createStore } from 'redux';
class ReduxDemo  extends Component {
  render(){
    //step 2: create reducer : state n action
    const reducer =function(state,action){
      if(action.type==="ATTACK"){
        return action.payload
      }
      if(action.type==="GreenATTACK"){
        return action.payload
      }
      return state;
    }
    //step 1: Store: reducer n state
    const  store= createStore(reducer,"peace");

    //step 3: Suscribe
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    })
    //step 4 : dispatch action
    store.dispatch({type:"ATTACK", payload:"Iron Man"})
    store.dispatch({type:"GreenATTACK", payload:"HULK"})

    return(
      <div>
        test
      </div>
    );
  }
}
export default ReduxDemo;

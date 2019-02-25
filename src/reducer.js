const defaultState = {
  currentUser: '',

}

function Reducer(state=defaultState, action){
  switch (action.type) { //action is an object, type is a property
    case "SET_USER":
    console.log()
      return {...state, currentUser}
      break;
    default:
      return state //whenever you return from a reducer, that becomes the new state

  }

}

export default Reducer

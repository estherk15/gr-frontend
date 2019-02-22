const defaultState = {
  testing: "works?"

}

function Reducer(state=defaultState, action){
  switch (action.type) { //action is an object
    case "SOMETHING":
      return {...state, somethingNew: "Value"}
      break;
    default:
      return state

  }

}

export default Reducer


function inkblotReducer(state = {inkblots: []}, action){
    switch (action.type) {
      case 'FETCHED_INKBLOTS':
        return {...state, inkblots: action.payload}
      default:
        return state;
    }
  } 

  export default inkblotReducer
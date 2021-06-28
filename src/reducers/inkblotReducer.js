
function inkblotReducer(state = {inkblots: [], loading: false}, action){
    switch (action.type) {
      case 'FETCHED_INKBLOTS':
        return {...state, inkblots: action.payload, loading: false}
      default:
        return state;
    }
  } 

  export default inkblotReducer
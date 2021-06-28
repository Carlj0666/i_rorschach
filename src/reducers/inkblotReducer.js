
function inkblotReducer(state = {inkblots: [], loading: false}, action){
    switch (action.type) {
      case 'FETCHED_INKBLOTS':
        return {...state, inkblots: action.payload, loading: false}
      case 'LOADING':
        return {...state, loading: true}
      default:
        return state;
    }
  } 

  export default inkblotReducer
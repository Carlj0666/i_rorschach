const url = 'http://127.0.0.1:3001/inkblots'

export const setInkblots = (inkblots) => ({type: 'FETCHED_INKBLOTS', payload: inkblots})

export const fetchInkblots = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            const inkblots = json.data
            console.log(inkblots)
            dispatch(setInkblots(inkblots))
        })
    }
}

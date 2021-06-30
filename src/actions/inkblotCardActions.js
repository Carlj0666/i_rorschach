const url = 'http://127.0.0.1:3001/inkblots'

export const setInkblots = (inkblots) => ({type: 'FETCHED_INKBLOTS', payload: inkblots})



export const fetchInkblots = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            const inkblots = json.data
            dispatch(setInkblots(inkblots))
        })
    }
}

export const createInkblots = (inkblot) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(inkblot)
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            // getting 404 error here on response
        })
    }
}

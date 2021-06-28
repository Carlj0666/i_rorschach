const url = 'http://127.0.0.1:3001/inkblots'

export const setInkblots = (inkblots) => ({type: 'FETCHED_INKBLOTS', payload: inkblots})

// export const addItem = () => ({type: 'ADDED_COMMENT', payload: comment})

export const fetchInkblots = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            const inkblots = json.data
            console.log(inkblots[0].relationships.comments.data[0])
            dispatch(setInkblots(inkblots))
        })
    }
}

// export const createComment = (comment) => {
//     return (dispatch) => {
//         const configObj = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accepts': 'application/json'
//             },
//             body: JSON.stringify(comment)
//         }
//         fetch(url, configObj)
//         .then(resp => resp.json)
//         .then(json => {
//             const newComment = json.data
//             dispatch(addComment(newComment))
//         })
//     }
// }
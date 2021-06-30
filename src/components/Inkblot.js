import React from 'react'

function Inkblot(props) {
    console.log(props)
    return(
        <div>
            <img src={props.link} alt=""/>
        </div>
    )
}

export default Inkblot
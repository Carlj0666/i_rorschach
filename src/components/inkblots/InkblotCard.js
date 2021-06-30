import React from 'react'

function InkblotCard(props) {
    console.log(props)
    return(
        <div>
            <img src={props.link} alt=""/>
            <ul>
                <li>
                    {props.comment}
                </li>
            </ul>
        </div>
    )
}

export default InkblotCard

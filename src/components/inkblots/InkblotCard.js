import React from 'react'
// import CommentForm from '../comments/CommentForm'
import { connect } from 'react-redux'


function InkblotCard(props) {
    console.log(props.link)
    return(

        <div>
            <img src={props.link} />
        </div>   
    )
}





export default InkblotCard
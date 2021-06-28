// import React from 'react'
// import { connect } from 'react-redux'
// import { createComment } from '../../actions/inkblotCardActions'

// function CommentForm() {
//     state = {
//         name: ''
//     }

//     handleChange = (event) => {
//         const name = event.target.name
//         const value = event.target.value

//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.createItem(this.state)
//         this.setState({
//             name: ''
//         })
//     }

//     return (
//         <form onSubmit={this.handleSubmit}>
//             <label>Comment</label>
//             <input type='text' name='verbiage' value={this.state.name} onChange={this.handleChange} />
//             <input type='submit'/>
//         </form>   
//     )
// }

// export default connect(null, {createComment})(CommentForm)
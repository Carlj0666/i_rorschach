import React from 'react'

class ImageForm extends React.Component {

    state ={
        link: ''
    }

    // handleInput = (event) => {
    //     event.preventDefault()
    //     console.log(this.state)
    // }

    handleChange = (event) => {
        this.setState({
            link: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleInput}>
                    <label>Submit Your Image Here</label>
                    <br></br>
                    <input 
                        type="text" 
                        name="link" 
                        value={this.state.link} 
                        onChange={this.handleChange}>
                    </input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
                
}

export default ImageForm
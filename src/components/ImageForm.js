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
        const link = event.target.name
        const value = event.target.value
        const regex = /(https?:\/\/.*\.(?:png|jpg))/i
        if (regex.test(value)) {
            console.log(value)
            this.setState({
                [link]: value
            })
        } else {
           alert("Not a valid Link")
        }
  
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleInput}>
                    <label>Paste Your Image Link Here</label>
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
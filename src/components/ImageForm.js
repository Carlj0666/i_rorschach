import React from 'react'
import {createInkblots} from '../actions/inkblotCardActions'
import {connect} from 'react-redux'

class ImageForm extends React.Component {

    state ={
        link: ""
    }

    handleChange = (event) => {
        // const link = event.target.name
        const value = event.target.value
        const regex = /(https?:\/\/.*\.(?:png|jpg))/i
        if (regex.test(value)) {
             // Issue is here, data not persisting
            this.setState({
                link: value
                
            })
        } else {
           alert("Not a valid Link")
        }
    }
 
    handleSubmit = (event) => {
        event.preventDefault()

        this.props.createInkblots(this.state)

        this.setState = ({
            link: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
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

export default connect(null, {createInkblots})(ImageForm)
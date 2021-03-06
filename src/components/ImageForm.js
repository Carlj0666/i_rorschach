import React from 'react'
import {createInkblots} from '../actions/inkblotCardActions'
import {connect} from 'react-redux'

class ImageForm extends React.Component {

    state ={
        link: ""
    }

    handleChange = (event) => {
        const value = event.target.value
        const regex = /(https?:\/\/.*\.(?:png|jpg))/i
        if (regex.test(value)) {
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
console.log(this.state)
        this.setState({
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

const mapDispatchToProps = (dispatch) => {
    return {
        createInkblots: (inkblot) => dispatch(createInkblots(inkblot))
    }
}


export default connect(null, mapDispatchToProps)(ImageForm)

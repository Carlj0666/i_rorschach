import React from 'react'
import { connect } from 'react-redux'

class InkblotShow extends React.Component {

   

    render(){
        console.log(this.props.match.params)
        const thisInkblot = this.props.match.params
        return (
            <div>
                <img src={this.props.match.params} alt=""/>
            </div>   
        )
    }
}

export default InkblotShow

// how do I use the id to get info about the inkblot and display that info on the page?
// Are comments included in that info, how do I display those, if yes use them, if not figure out how to get the comments and display
// part of the comments will be to display the form
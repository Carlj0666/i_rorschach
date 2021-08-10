import React from 'react'

class Inkblot extends React.Component {

    state = {
        counter: 0
    }

    handleClick = (event) => {
        this.setState(prevState => {
            console.log(prevState)
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render(){
        return(
            <>
                <div>
                    <img src={this.props.link} alt=""/>
                </div>
                <div>
                    <button onClick={this.handleClick}>UPVote!</button>
                    <p>{this.state.counter}</p>
                </div>
            </>
        )
    }
}

export default Inkblot
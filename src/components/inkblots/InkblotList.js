import React from 'react'
import { connect } from 'react-redux'

class InkblotList extends React.Component {

    componentDidMount(){
        const url = 'http://127.0.0.1:3001/inkblots'

        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            const inkblots = json.data
            this.props.setInkblots(inkblots)
        })
    }

    makeImageCards(){
        return this.props.inkblots.map(inkblot => <InkblotCard
            key={inkblot.id}
            id={inkblot.id}
            link={inkblot.attributes.link}
            />)
    }
  
    render(){
        return (
            <div id='inkblot-list'>
                {this.makeInkblotCards()}
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inkblots: state.inkblots
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInkblots: (inkblots) => dispatch({type: 'FETCHED_ITEMS', payload: inkblots})
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(InkblotList)

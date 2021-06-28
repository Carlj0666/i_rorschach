import React from 'react'
import { connect } from 'react-redux'
import InkblotCard from './InkblotCard'

import { setInkblots } from '../../actions/inkblotCardActions'

class InkblotList extends React.Component {

    componentDidMount(){
        // const url = 'http://127.0.0.1:3001/inkblots'

        // fetch(url)
        // .then(resp => resp.json())
        // .then(json => {
        //     const inkblots = json.data
        //     console.log(inkblots)
        //     this.props.setInkblots(inkblots)
        // })
    }

    makeInkblotCards(){
        return this.props.inkblots.map(inkblot => <InkblotCard
            key={inkblot.id}
            id={inkblot.id}
            link={inkblot.attributes.link}
            />)
    }
  
    render(){
        return (
            <div id='inkblots-list'>
                {this.props.loading ? <h3>Loading</h3> : this.makeInkblotCards()}
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inkblots: state.inkblots,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInkblots: (inkblots) => dispatch(setInkblots(inkblots))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InkblotList)

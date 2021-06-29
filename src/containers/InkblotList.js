import React from 'react'
import { connect } from 'react-redux'
import InkblotCard from '../components/inkblots/InkblotCard'
// import CommentForm from '../components/comments/CommentForm'

import { fetchInkblots } from '../actions/inkblotCardActions'

class InkblotList extends React.Component {

    componentDidMount(){
        this.props.fetchInkblots()
    }

    makeInkblotCards(){

        // console.log(this.props.inkblots[0].attributes)
        return this.props.inkblots.map(inkblot => <InkblotCard
            key={inkblot.id}
            id={inkblot.id}
            link={inkblot.attributes.link}
            
            />)
    }
  
    render(){
        return (
            <div id='inkblot-list'>
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
        fetchInkblots: () => dispatch(fetchInkblots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InkblotList)

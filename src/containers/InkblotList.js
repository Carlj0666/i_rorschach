import React from 'react'
import { connect } from 'react-redux'
import Inkblot from '../components/Inkblot'
import ImageForm from '../components/ImageForm'

import { fetchInkblots } from '../actions/inkblotCardActions'

class InkblotList extends React.Component {

    componentDidMount(){
        this.props.fetchInkblots()
    }

    makeInkblotCards(){

        // console.log(this.props.inkblots[0].attributes)
        return this.props.inkblots.map(inkblot => <Inkblot
            key={inkblot.id}
            id={inkblot.id}
            link={inkblot.attributes.link}
            
            />)
    }

    addNewInkblot = (data) => {
        console.log(data)
    }
  
    render(){
        return (
            <>
                <div>
                    <ImageForm handleOnSubmit={this.addNewInkblot}/>
                </div>
                <div id='inkblot-list'>
                    {this.props.loading ? <h3>Loading</h3> : this.makeInkblotCards()}
                </div>
                
            </>
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

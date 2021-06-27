import React from 'react'
import { connect } from 'react-redux'


class ImageList extends React.Component {
    render(){
        return (
            <div id='image-list'>
                'imagelist'
            </div>   
        )
    }
}



export default connect(mapStateToProps)(ImageList)


Assessment Prep Notes:

Steps to Get and Post inkblots:


import { fetchInkblots } from '../actions/inkblotCardActions'

class InkblotList extends React.Component {

    componentDidMount(){
        this.props.fetchInkblots()
    }


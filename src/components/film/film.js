import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {
    film_action
}
from '../../action/actionCreator';
import './style/movie.css'
import FilmUI from './children/filmUI'
class Film extends Component {
    render() {
        let {filmDate} = this.props;
        return (
            <Fragment >
                <FilmUI Movies={filmDate}/>
            </Fragment>
        )
    }
    componentDidMount () {
        this.props.getFilmData ();
    }
}

const mapStateToProps = (state)=>({
    filmDate:state.film.filmDate
 })
 const mapDispatchToProps =(dispatch)=>({
    getFilmData(){
        dispatch(film_action());
    }
 })
export default connect(mapStateToProps,mapDispatchToProps)(Film);
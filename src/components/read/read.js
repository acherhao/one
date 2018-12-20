import React,{Component,Fragment} from 'react';
import {connect} from "react-redux";
import ReadUI from './children/readUI';
import './style/read.css'
import {
    read_action
}
from "../../action/actionCreator";

class Read extends Component {
    constructor () {
        super ();
        
    }
    render() {
        let {readDate} = this.props;
        return (
            <Fragment >
              <ReadUI reads={readDate} handleClickReadCon={this.handleClickReadCon}/>
            </Fragment>
        )
    }
    componentDidMount () {
        this.props.getReadDate ();
    }
    //点击进入详情页
    handleClickReadCon (read_id) {
        console.log(read_id);
        //location.href="http://m.wufazhuce.com/article/"+read_id
    }
}

const mapStateToProps = (state) => ({
    readDate:state.read.readDate
})
const mapDispatchToProps = (dispatch) => ({
    getReadDate () {
        dispatch(read_action());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Read);
import React,{Component,Fragment} from 'react';
import {one_action} from '../../action/actionCreator';
import {connect} from 'react-redux';


class Home extends Component {
    render() {
        let {oneDate} = this.props
        return (
            <Fragment>
                {
                    oneDate.map((item,index)=>{
                        return  <div key={index}> 
                                    <p>{item.title}</p>
                                    <p>{item.date}</p>
                                    <div>
                                        <img src={item.img_url}/>
                                    </div>
                                    <p>{item.picture_author}</p>
                                    <p>{item.content}</p>
                                    <p>{item.text_authors}</p>
                                </div>
                    })
                }
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getData()
    }
}
const mapStateToProps = (state)=>({
    oneDate:state.one.oneDate
 })
 const mapDispatchToProps =(dispatch)=>({
   getData(){
        dispatch(one_action())
    }
 })
export default connect(mapStateToProps,mapDispatchToProps)(Home);
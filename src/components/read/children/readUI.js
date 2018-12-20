import React,{Component} from 'react';

export default class ReadUI extends Component {
    render () {
        let {reads} = this.props;
        return (
            <div>
                {
                    reads.map((item,index)=>{
                        return <div className="readCon" 
                                    key={item.content_id}
                                    onClick={this.props.handleClickReadCon.bind(this,item.content_id)}
                                >
                                    <p className="readCon-top">{item.article_title}</p>
                                    <h3 className="readCon-title">{item.title}</h3>
                                    <p className="readCon-author">文／{item.user_name}</p>
                                    <div className="readCon-img">
                                        <img src={item.img_url}/>
                                    </div>
                                    <p className="readCon-text">{item.forward}</p>
                                    <p className="readCon-time">{item.date}</p>
                                </div>
                                
                    })
                }
                {/*<div className="readCon">
                    <p className="readCon-top">- STORY -</p>
                    <h3 className="readCon-title">没有赏味期限，只有来日方长</h3>
                    <p className="readCon-author">文／周源远</p>
                    <div className="readCon-img">
                        <img src="http://image.wufazhuce.com/Fo59plBlnS9WkK9dkR-y6IkOAMN-"/>
                    </div>
                    <p className="readCon-text">爱一个人的时候，才会学会理解和包容。愿意为对方削去身上的棱角，然后打磨成圆。</p>
                    <p className="readCon-time">2017/7/31</p>
                </div>

                
                */}
            </div>    
        )
    }
}
import React,{Component} from 'react';

export default class ReadUI extends Component {
    render () {
        return (
            <div>
                <div className="readCon">
                    <p className="readCon-top">- STORY -</p>
                    <h3 className="readCon-title">没有赏味期限，只有来日方长</h3>
                    <p className="readCon-author">文／周源远</p>
                    <div className="readCon-img">
                        <img src="http://image.wufazhuce.com/Fo59plBlnS9WkK9dkR-y6IkOAMN-"/>
                    </div>
                    <p className="readCon-text">爱一个人的时候，才会学会理解和包容。愿意为对方削去身上的棱角，然后打磨成圆。</p>
                    <p className="readCon-time">2017/7/31</p>
                </div>

                <div className="readCon">
                    <p className="readCon-top">- 阅读 -</p>
                    <h3 className="readCon-title">如何避免被薛甄珠式的亲妈带进沟里？</h3>
                    <p className="readCon-author">文／王嫣芸</p>
                    <div className="readCon-img">
                        <img src="http://image.wufazhuce.com/FtaNfz4r8AVOjVQdBEevobmNDvV4"/>
                    </div>
                    <p className="readCon-text">我们不太习惯残忍，所以更多时候选择躲在低质量的亲密关系里用“爱没有对错”这句话麻痹自己。 </p>
                    <p className="readCon-time">2017/7/29</p>
                </div>
            </div>    
        )
    }
}
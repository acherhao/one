import React,{Component} from 'react';

export default class FilmUI extends Component {
    render() {
        let {Movies} = this.props
        return (
            <div >
               <div className="movie">
                    <div className="header">
                        <table>
                            <tbody>
                                <tr>
                                    <td><a href="#left-panel" className="ui-link"><i className="fa fa-camera-retro fa-5x"></i></a></td>
                                    <td align="center">
                                        <span className="text-header text">一个影视</span>
                                    </td>
                                    <td>
                                        <a id="header_search_btn_angMovie_index" className="ui-link">
                                        <i className="fa-search-plus"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
       
                <div className="content-list">
                    {
                        Movies.map((item,index)=>{
                            return(
                                    <div key={index}>
                                        <p>- 影视 -</p>
                                        <p>
                                            <a href="http://m.wufazhuce.com/movie/1202">{item.title}</a>
                                        </p>
                                        <p>文/{item.user_name}</p>
                                        <div>
                                            <img className="lazy_img resize_img img_center_x" data-src={item.img_url} src={item.img_url}/>
                                        </div>
                                        <p>{item.forward}</p>
                                        <p>关于{item.subtitle}</p>
                                        <p>{item.date}</p>
                                    </div>
                            )
                        })
                    }    
                </div>

            </div>
        )
    }
}


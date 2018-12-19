import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink} from 'react-router-dom'

import Home from './components/home/home.js'
import Download from './components/download/download.js'
import Film from './components/film/film.js'
import Music from './components/music/music.js'
import Read from './components/read/read.js'
import About from './components/about/about.js'

class App extends Component {
  constructor () {
    super ();
    this.state = {
      flag: true
    }
    this.handleNavList = this.handleNavList.bind(this);
    this.handleBox = this.handleBox.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
  }
  render() {
    let {flag} = this.state;
    return (
      <Router>
        <div>
          <div onClick={this.handleBox} className="conent-warp">
            <Route path="/home" component={Home}/>
            <Route path="/film" component={Film}/>
            <Route path="/music" component={Music}/>
            <Route path="/download" component={Download}/>
            <Route path="/read" component={Read}/>
            <Route path="/about" component={About}/>
          </div>
          {/*蒙版*/}
          <div className="boxmsg"></div>

          <div className="nav" >
            <div className="nav-title">
              <span className="nav-icon-left" 
                    onClick={this.handleNavList}>{/*点击显示左边导航列表*/}
              <i className="iconfont">&#xe606;</i>     
              </span>
              <p>一个阅读</p>
              <span className="nav-icon-right"
                    onClick={this.handleSeek}>{/*点击搜索*/}
                <i className="iconfont">&#xe60b;</i>
              </span>
            </div>


            <div className={"nav-list"} style={{display:flag?"none":"block"}}> 
              <ul>
                <li onClick={this.handleBox}><NavLink to="/home">图文</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/read">阅读</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/music">音乐</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/film">影视</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/download">App下载</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/about">关于</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </Router>
    );
  }
  //隐藏和显示左边导航列表的判断
  handleNavList (e) {
    e.stopPropagation();
    this.setState({
      flag: false
    })
  }
  handleBox () {
    this.setState({
      flag: true
    })
  }
  //展示搜索框
  handleSeek () {

  }
}

export default App;

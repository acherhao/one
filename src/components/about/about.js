import React,{Component} from 'react';
import AboutUI from './children/aboutUI.js'
import './style/about.css'
class About extends Component {
    render() {
        return (
            <div className="about">
                <AboutUI/>
            </div>
        )
    }
}

export default About;
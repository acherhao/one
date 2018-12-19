import React,{Component,Fragment} from 'react';

import ReadUI from './children/readUI';
import './style/read.css'

class Read extends Component {
    render() {
        return (
            <Fragment >
              <ReadUI />
            </Fragment>
        )
    }
}

export default Read;
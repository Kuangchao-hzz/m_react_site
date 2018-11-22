import * as React from 'react';
import './index.css'

class MHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={'m-header-container'}>
        <h5>标题</h5>
      </div>
    )
  }
}

export default MHeader

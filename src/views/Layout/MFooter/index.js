import * as React from 'react'
import './index.css'

class MFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={'m-footer-container'}>
        <ul>
          <li>
            <span>首页</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default MFooter

import React, {Component, PropTypes} from 'react'
import { WordExpressMenu } from 'wordexpress-components'
import AppNav from '../nav/_AppNav.js'
import MeBudsLogo from '../icons/mebudz.js'

import CSSModules from 'react-css-modules'
import styles from './header.scss'

@CSSModules(styles, {allowMultiple: true})
class Header extends Component {
  render() {
    return (
      <header styleName="base">
        <div styleName="wrapper">
          <WordExpressMenu menu="primary-navigation">
            <AppNav/>
          </WordExpressMenu>
          <a href="http://mainelybudz.us" target="_blank">
            <MeBudsLogo/>
          </a>
        </div>
      </header>
    )
  }
}

export default Header

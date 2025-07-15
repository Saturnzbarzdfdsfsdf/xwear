import React from 'react'

import {Link} from 'react-router-dom'

import NavList from './components/NavList'
import { Logo } from '../../../shared/ui'


import logoSvg from '../../../shared/assets/icon/Logo.svg'
import '../../../shared/sass/main.scss'
import style from './Header.module.scss'

const Header = () => {

  return (
    <header className={style.header}>
      <div className='container'>

      <div className={style.inner}>

        <Link>
          <Logo props={logoSvg} />
        </Link>

        <nav>
          <NavList /> 
        </nav>

        <div>social</div>

        </div>
      </div>

    </header>
  )
}

export default Header
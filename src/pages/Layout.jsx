import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../Routes'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/cars">
                        Cars
                    </Link>
                </li>
            </ul>
        </nav>
        <Routes/>
    </div>
  )
}

export default Layout
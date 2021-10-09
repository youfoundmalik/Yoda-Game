import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'

import './LevelOne.scss'

const LevelOne = () => {
    return (
        <>
            <Helmet>
                <title>Level One</title>
            </Helmet>
            <div className="level-one__container">
                <Header
                    amount='25'
                />
            </div>
            
        </>
    )
}

export default LevelOne

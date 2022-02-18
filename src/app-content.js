import React from 'react'
import PropTypes from 'prop-types'

// Components
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const AppContent = ({userinfo, repos, starred}) => {
    return (
        <div className='app'>

            <Search />
            
            {userinfo.loaded && <UserInfo userinfo={userinfo}/>}

            {userinfo.loaded && <Actions />}

            {!!repos.length &&
            <Repos 
            className="repos" 
            title="Repositórios"
            repos={repos} />}

            {!!starred.length && 
            <Repos 
            className="starred" 
            title="Favoritos"
            repos={starred} />}

        </div>
    );
}

AppContent.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent;
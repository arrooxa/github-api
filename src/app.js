import React, { useState } from 'react'

import AppContent from './app-content';

const App = () => {

    const [userInfo, setUserInfo] = useState({
        info: null,
        repos: [],
        starred: []
    })

    function handleSearch(e){
        const value = e.target.value;
        const keyCode = e.key;
        const target = e.target;

        if(keyCode === 'Enter'){
            fetch(`https://api.github.com/users/${value}`)
            .then((result) => result.json())
            .then((json) => {
                target.disabled = true;
                setUserInfo(prevState => ({
                    ...prevState,
                    info: {
                        name: json.name,
                        user: json.login,
                        img: json.avatar_url,
                        repos: json.public_repos,
                        followers: json.followers,
                        following: json.following,
                        city: json.location
                    },
                    repos: [],
                    starred: []
                }))
            })
            .then(() => target.disabled = false)
        }
    }

    function getRepos(type){
        return (e) => {
            fetch(`https://api.github.com/users/${userInfo.info.user}/${type}`)
            .then((result) => result.json())
            .then((json) => {
                setUserInfo(prevState => ({
                    ...prevState,
                    [type]: json.map((repo) => ({
                            name: repo.name,
                            link: repo.html_url
                    }))
                }))
            })
        }
    }

    return (
        <AppContent 

        userinfo={userInfo.info}
        repos={userInfo.repos}
        starred={userInfo.starred}
        handleSearch={(e) => handleSearch(e)}
        getRepos={getRepos('repos')}
        getStarred={getRepos('starred')}
        
        />
    );
}

export default App;
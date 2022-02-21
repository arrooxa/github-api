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

        if(keyCode === 'Enter'){
            fetch(`https://api.github.com/users/${value}`)
            .then((result) => result.json())
            .then((json) => {
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
                    }
                }))
            })
        }
    }

    function getRepos(type){
        return (e) => {
            console.log(type);
            fetch(`https://api.github.com/users/arrooxa/${type}`)
            .then((result) => result.json())
            .then((json) => {

                setUserInfo(prevState => ({
                    ...prevState,
                    [type]: [{
                        name: json[0].name,
                        link: json[0].html_url
                    }]
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
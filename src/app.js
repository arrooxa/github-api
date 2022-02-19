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
                setUserInfo((prevState) => ({
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
        }
    }

    return (
        <AppContent 

        userinfo={userInfo.info}
        repos={userInfo.repos}
        starred={userInfo.starred}
        handleSearch={(e) => handleSearch(e)}
        
        />
    );
}

export default App;
import React, { useState } from 'react'

import AppContent from './app-content';

const App = () => {

    const [userInfo, setUserInfo] = useState({
        info: {
            loaded: true,
            name: "Vitor Rocha",
            user: "arrooxa",
            img: "https://avatars.githubusercontent.com/u/70202034?v=4",
            repos: 12,
            followers: 2,
            following: 7,
            city: "Santos - São Paulo"
        },
        repos: [{
            name: "Nome do repositório",
            link: "#"
        }],
        starred: [{
            name: "Nome do repositório",
            link: "#"
        }]
    })

    return (
        <AppContent 

        userinfo={userInfo.info}
        repos={userInfo.repos}
        starred={userInfo.starred}
        
        />
    );
}

export default App;
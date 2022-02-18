import React from 'react';

const UserInfo = () => {
    return(
        <div className="user-info">

            <h2 className='username'>
                <a href="https://github.com/arrooxa">Vitor Rocha</a>
            </h2> 

            <img src="https://avatars.githubusercontent.com/u/70202034?v=4"></img>

            <h3>Santos - São Paulo</h3>

            <ul className='repos-info'>
                <li>Repositórios: 13</li>
                <li>Seguidores: 2</li>
                <li>Seguindo: 7</li>
            </ul>

        </div>
    )
}

export default UserInfo;
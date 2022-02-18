import React from 'react';
import PropTypes from 'prop-types'

const UserInfo = ({userinfo}) => {
    return(
        <div className="user-info">

            <h2 className='username'>
                <a href={`https://github.com/${userinfo.user}`}>{userinfo.name}</a>
            </h2> 

            <img src={userinfo.img}></img>

            <h3>{userinfo.city}</h3>

            <ul className='repos-info'>
                <li>Repositórios: {userinfo.repos}</li>
                <li>Seguidores: {userinfo.followers}</li>
                <li>Seguindo: {userinfo.following}</li>
            </ul>

        </div>
    )
}

UserInfo.propTypes = { 
    userinfo: PropTypes.shape({
        user: PropTypes.string.isRequired,
        name: PropTypes.string,
        img: PropTypes.string.isRequired,
        city: PropTypes.string,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
    })
}

export default UserInfo;
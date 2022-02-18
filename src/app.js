import React from 'react';

const App = () => {
    return (
        <div className='app'>
            <div className='search'>
                <input type="search" placeholder='Digite um usuário' />
            </div>

            <div className="user-info">
                <h2>
                    <a href="https://github.com/arrooxa">Vitor Rocha</a>
                </h2>
                <img src="https://avatars.githubusercontent.com/u/70202034?v=4"></img>
                <h3>Santos - São Paulo</h3>
            </div>

            <ul className='repos-info'>
                <li>Repositórios: 13</li>
                <li>Seguidores: 2</li>
                <li>Seguindo: 7</li>
            </ul>

            <div className='actions'>
                <button>Ver repositórios</button>
                <button>Ver favoritos</button>
            </div>

            <div className='repos'>
                <h3>Repositórios: 13</h3>
                <ul>
                    <li>
                        <a href=''>Nome do repositório</a>
                    </li>
                </ul>
            </div>

            <div className='starred'>
                <h3>Favoritos: 1</h3>
                <ul>
                    <li>
                        <a href=''>Nome do repositório</a>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default App;
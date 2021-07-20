import React, {useEffect, useState} from 'react';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function Repositories(){
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();
    //Pegar os dados do localStorage
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }else{
            history.push('/')
        }
        
    }, []);

    return(
        <S.Countainer>        
            <S.Title>Repositórios</S.Title>
            <S.List>
                {
                    repositories.map(repository => {
                        return(
                            <S.ListItem>{ repository }</S.ListItem>
                        )
                    }
                    ) 
                }
            </S.List>  
            <S.LinkHome to='/'>Voltar</S.LinkHome>     
        </S.Countainer>
    )

}

export default Repositories;
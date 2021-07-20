import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const [usuario, setUsuario] = useState('')
  const history = useHistory('');
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data; // dados coletados pela API
      const repositoriesName = [];
      repositories.map((repository) => {// percorrendo a string e populando a repositoryName, somente com os names
        repositoriesName.push(repository.name);        
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))//Guardar valor no localStorage
      setErro(false);
      history.push('/repositories')
    })
    .catch( err => {
      setErro(true);
    });
  }
  return (

    <S.CHome>
      <S.Countainer>
      
        <S.Input type='text' placeholder="usuario" className="usuario" value = {usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Buttom   className="pesquisar" onClick={handlePesquisa} to='/Repositories'>Pesquisar</S.Buttom>   
      </S.Countainer>
      {erro ? <S.errorMsg>{`\n Ocorreu um erro. Tente novamente`}.</S.errorMsg> : ""} 
    </S.CHome>    
  );
}

export default  App;
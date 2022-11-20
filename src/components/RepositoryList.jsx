import React, {useEffect, useState} from 'react';
import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'

export function RepositoryList() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/fabiosjc/repos')
      .then(respose => respose.json())
      .then(data => setRepos(data))
  }, [])

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>
      <ul>
        {repos.map(repository => (
          <RepositoryItem key={repository.name} repository={repository}  />
        ))}
      </ul>
    </section>
  );
}
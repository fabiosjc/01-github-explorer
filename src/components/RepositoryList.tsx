import React, {useEffect, useState} from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/fabiosjc/repos')
      .then(response => response.json())
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
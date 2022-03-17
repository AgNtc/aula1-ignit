import { RepositorioItem } from "./RepositoryItem";
import '../../styles/repositories.scss'

const repository ={
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
    return (
      <section className="repository-list">
        <h1> Lista de repositórios</h1>
        <ul>
          <RepositorioItem repository={repository} />
          <RepositorioItem repository={repository} />
          <RepositorioItem repository={repository} />
          <RepositorioItem repository={repository} />
        </ul>
      </section>
    );
}
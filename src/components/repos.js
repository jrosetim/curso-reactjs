import React, {PropTypes} from 'react'

const Repos = ({classname, title, repos}) => (
  <div className={classname}>
    <h2>{title}</h2>
    <ul>
      { repos.map( (repo, index) => (
          <li key={index}><a href={repo.link}> {repo.name}</a></li>
      ))}
    </ul>
  </div>
)

Repos.defaulProps ={
  className: ''
}


Repos.prototype = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}
export default Repos

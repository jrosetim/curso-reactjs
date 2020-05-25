import React from 'react'

const Actions = ({handlerRepos}) => (
  <div className='actions'>
    <button onClick={handlerRepos}>Ver repositórios</button>
    <button >Ver favoritos</button>
  </div>
)

export default Actions

import React, {ProtoTypes} from 'react'

const Actions = ({handlerRepos, handlerStarred}) => (
  <div className='actions'>
    <button onClick={handlerRepos}>Ver repositórios</button>
    <button onClick={handlerStarred} >Ver favoritos</button>
  </div>
)

// Actions.prototype ={
//   handlerRepos: ProtoTypes.func
// }

export default Actions

import React, {Component} from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor (){
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER){
      ajax().get(`https://api.github.com/users/${value}`)
      .then((result) =>{
        //console.log(result);
        this.setState({
          userInfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        })
      })
    }
  }

  handlerRepos (e) {
    const user = this.state.userInfo.login
    ajax().get(`https://api.github.com/users/${user}/repos`)
    .then((result) => {
      console.log(result);
      this.setState({
        repos: result
      })
    }
    )
  }

  render(){
    return <AppContent
      userinfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={ (e) => this.handleSearch(e) }
      handlerRepos={( e) => this.handlerRepos(e)}
    />
  }
}

export default App

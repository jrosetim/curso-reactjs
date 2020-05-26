import React, {Component} from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor (){
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGitHubApiUrl(username, type){
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users/${username}${internalType}`
  }

  showLoading(){
    this.setState({isFetching: !this.state.isFetching})
    return this.state.isFetching
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target = e.target

    if (keyCode === ENTER){
      this.showLoading()
      ajax().get(this.getGitHubApiUrl(value))
      .then((result) =>{
        this.setState({
          userInfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
      .always( () => this.showLoading())
    }
  }

  handlerRepos (type) {
    const user = this.state.userInfo.login
    ajax().get(this.getGitHubApiUrl(user, type))
    .then((result) => {
      console.log(result);
      this.setState({
        [type]: result
      })
    }
    )
  }

  render(){
    return <AppContent
      userinfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
      isFetching={this.state.isFetching}
      handleSearch={ (e) => this.handleSearch(e) }
      handlerRepos={ () => this.handlerRepos('repos')}
      handlerStarred={() => this.handlerRepos('starred') }
    />
  }
}

export default App

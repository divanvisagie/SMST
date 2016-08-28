import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import createNavigation from './components/navigation'
import Post from './components/post'
import posts from '../posts/posts'

const post = Post(posts)
const Navigation = createNavigation({posts})

const App = React.createClass({
  render () {
    return (
      <div className='app-body'>
        <div className='app-body'>
          <Navigation />
          <div className='content'>
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
})

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={post} />
      <Route path='post/:id' name='post' component={post} />
    </Route>
  </Router>
), document.getElementById('app'))

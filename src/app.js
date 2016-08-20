import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import PostList from './components/post-listing'
import Post from './components/post'
import posts from '../posts/posts'


const post = Post(posts)

const App = React.createClass({
  render () {
    return (
      <div className='app-body'>
        <div className='app-body'>
          <PostList posts={posts} />
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

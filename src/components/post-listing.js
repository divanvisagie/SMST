import React from 'react'
import { Link } from 'react-router'

function buildLink (post) {
  return `/post/${post.id}`
}

const imageStyle = {
  width: '100%'
}

const imageContainer = {
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const linkWidth = 'col-md-3 col-xs-3'

const linkContainer = {
  margin: '0'
}

const PostItem = ({post}) =>
  <li>
    <Link to={buildLink(post)}>{post.title}</Link>
  </li>

const PostList = ({posts}) =>
  <div className='menu alert alert-dismissible alert-primary panel'>
    <a className='brand' href='#'>
      <div style={imageContainer}>
        <img src='http://placehold.it/250x250' style={imageStyle} />
      </div>
      <h1>SMST</h1>
    </a>
    <div className='row' style={linkContainer}>
      <div className={linkWidth}></div>
      <div className={linkWidth}>
        <a target='_blank' href='https://github.com/divanvisagie/SMST'><i className='fa fa-github'></i></a>
      </div>
      <div className={linkWidth}>
        <a target='_blank' href='https://github.com/divanvisagie/SMST'><i className='fa fa-medium'></i></a>
      </div>
      <div className={linkWidth}></div>
    </div>
    <ul className='nav nav-pills nav-stacked' >
      {posts.map((post, i) => {
        return <PostItem post={post} key={i} />
      })}
    </ul>
  </div>

export default PostList

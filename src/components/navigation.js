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

function getMenuStyle (shown) {
  if (shown) {
    return {
      marginLeft: '0'
    }
  }
  return {}
}
const MenuItem = ({item}) => {
  return (
    <li>
      <Link to={item.target}>{item.title}</Link>
    </li>
  )
}

function createNavigation (options) {
  const { posts } = options

  const menuItems = posts.map(x => {
    return { target: buildLink(x), title: x.title }
  })

  return React.createClass({
    render () {
      return (
        <div className='menu alert alert-dismissible alert-primary panel'>
          <div className='menu-button'>
            <a>
              <i className='fa fa-bars'></i>
            </a>
          </div>
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
            {menuItems.map((item, i) => {
              return <MenuItem item={item} key={i} />
            })}
          </ul>
        </div>
      )
    }
  })
}

export default createNavigation

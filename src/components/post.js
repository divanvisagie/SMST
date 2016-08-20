import React from 'react'
import $ from 'jquery'
import marked from 'marked'

function Post (posts) {
  const center = {
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'maxWidth': '800px'
    // 'minWidth': '270px'
  }
  marked.setOptions({
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value
    }
  })

  const getPathForId = id => {
    const post = posts.find(p => p.id === id)
    if (post) return post.path
    return 'posts/introduction/README.md'
  }

  const getMarkdownForPath = (path, callback) => $.get(path, data => {
    callback (marked(data))
  })

  const getMarkdownForId = (id, callback) =>
    getMarkdownForPath(getPathForId(id), callback)

  return React.createClass({
    getInitialState () {
      return {
        md: ''
      }
    },
    componentWillMount () {
      console.log('test')
      const { id } = this.props.params
      getMarkdownForId(id, md => {
        this.setState({
          md
        })
      })
    },
    componentWillReceiveProps (props) {
      const { id } = props.params
      getMarkdownForId(id, md => {
        console.log(md)
        this.setState({
          md
        })
      })
    },
    render () {
      return (
        <div style={center}>
          <div ref='md' dangerouslySetInnerHTML={{__html: this.state.md}} />
        </div>
      )
    }
  })
}

export default Post

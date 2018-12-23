import React, { Component } from 'react'
import { Link } from '../routes'
import axios from 'axios'


class Portfolios extends Component {

  static async getInitialProps() {
    let posts = []
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts = response.data;
    } catch(err) {
        console.log(err)
    }
    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map(post => {
      return (
        <li key={post.id}>
          <Link route={ `/portfolio/${post.id}` } >
            <a>{ post.title }</a>
          </Link>
        </li>
      )
    })
  }


  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Portfolios page</h1>
        <ul>
          { this.renderPosts(posts) }
        </ul>
      </div>
    )
  }
}

export default Portfolios

import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'next/router'

class Portfolio extends Component {

  static async getInitialProps({ query }) {
    const portId = query.id;
    let data = {}
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portId}`);
      data = response.data;
    } catch (err) {
      console.log(err)
    } 
    return {data};
  }

  componentWillMount() {}

  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Portflolio page</h1>
        <p>{this.props.router.query.id}</p>
        <h1>{ data.title }</h1>
        <p>{ data.body }</p>
      </div>
    )
  }
}

export default withRouter(Portfolio)

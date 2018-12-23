import React from 'react'
import axios from 'axios'

import SuperComponent from '../components/SuperComponent'


class Index extends SuperComponent {

    static async getInitialProps() {
        let userData = {}
        try {
            console.log('axios.get')
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
        } catch(err) {
            console.log(err)
        }
        return { userData };
    }

    constructor(props) {

        super(props);

        this.state = {
            title: 'A am Index Page'
        }

    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    updateTitle() {
        this.setState({ title: 'I am updated Index Page'})
    }

    render() {
        const { title } = this.state;
        const { userData } = this.props;
        return (
            <div>
                <h1>I am Index Page from Class Component</h1>
                <h2>{ title }</h2>
                <p>{ userData.title }</p>
                <button onClick={ () => this.updateTitle() }>Change Title</button>
            </div>
        )
    }

}

export default Index
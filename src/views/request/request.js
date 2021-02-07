import React from 'react';
import axios from 'axios';

export const axiosTest = (url) => {
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}


class Request extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        axios.get(this.props.url)
            .then(res => {
                const posts = res.data.list;

                this.setState({
                    posts,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return (
            <div>
                Uh oh: {this.state.error.message} {this.props.url}
            </div>
        );
    }

    renderPosts() {
        if(this.state.error) {
            return this.renderError();
        }

        return (
            <ul>
                {/*{this.state.posts.map(post =>*/}
                    {/*<li key={post.id}>{post.id} - {post.type_client}</li>*/}
                {/*)}*/}
            </ul>
        );
    }

    render() {
        if (this.state.loading) {
            this.renderLoading()
        } else {
            console.log(this.state.posts);
            this.renderPosts()
        }

        return (
            <div>
                {this.state.posts.map(
                    client => <div key={eval(this.props.elements[0])}> { this.props.elements.map(o => eval(o) + "\n") } </div>
                )}

            </div>
        );
    }
}


export default Request
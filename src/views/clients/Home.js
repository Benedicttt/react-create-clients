import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Remove the 'www.' to cause a CORS error (and see the error state)
        axios.get(`http://localhost:3003/api/v1/all_clients`
        )
            .then(res => {
                // Transform the raw data by extracting the nested posts
                const posts = res.data.list;

                console.log(posts)
                // Update state to trigger a re-render.
                // Clear any errors, and turn off the loading indiciator.
                this.setState({
                    posts,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                // Something went wrong. Save the error in state and re-render.
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
                Uh oh: {this.state.error.message}
            </div>
        );
    }

    renderPosts() {
        if(this.state.error) {
            return this.renderError();
        }

        return (
            <ul>
                {this.state.posts.map(post =>
                    <li key={post.id}>{post.id} - {post.type_client}</li>
                )}
            </ul>
        );
    }

    // render() {
    //     return (
    //         <div>
    //             {this.state.posts.map(post =>
    //                 <h1 key={post.id}>{post.id} - {post.type_client}</h1>
    //             )}
    //
    //             {this.state.loading ?
    //                 this.renderLoading()
    //                 : this.renderPosts()}
    //         </div>
    //     );
    // }
}

// ReactDOM.render(
//     <Home subreddit="reactjs"/>,
//     document.getElementById('root')
// );

export default Home
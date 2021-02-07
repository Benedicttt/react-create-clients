import React from 'react';
import Request from "../request/request";


class Home extends React.Component {


    render() {
        return (
            <Request
                url='http://localhost:3003/api/v1/all_clients'
                elements =  {["client.id", "client.type_client"]}
            />
        );
    }
}



export default Home
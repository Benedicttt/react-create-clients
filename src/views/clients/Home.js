import React from 'react';
import Request from "../request/request";
import axios from 'axios';
import { axiosTest} from "../request/request";

let url='http://localhost:3003/api/v1/all_clients'

export default class Home extends React.Component {

    render() {

        axiosTest(url).then( function(result) {
            result.list.map( client => console.log( client.id + ' ' + client.type_client + ' ' + client.full_name ))
        });

        return (
            <div>
                <div>

                    {/*<Request*/}
                        {/*url='http://localhost:3003/api/v1/all_clients'*/}
                        {/*elements =  {["client.id", "client.type_client"]} />;*/}

                </div>
            </div>

        );

    }
}

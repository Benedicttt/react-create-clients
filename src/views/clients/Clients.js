import React from 'react';
import SideBar from "../helpers/sideBar";

let url='http://localhost:3000/api/v1/all_clients';

export default class Clients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clouds:[]
        }
    }

    componentDidMount() {
        fetch(url)
            .then(response => {
                return response.json()

            }).then(d => {

            let clouds = d.map((cloudData)=>{
                return({cloudData})
            })

            this.setState({clouds: clouds});

            console.log("state");
            console.log("state", this.state.clouds)
        })
    }

    render() {
        return (

            <div>
                <SideBar />

                <table>
                    <thead>
                    <tr >
                        <th>
                            ID
                        </th>
                    </tr>

                    <tr >
                        <th>
                            Type
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.clouds.map((cloud =>
                                    <tr id={cloud.cloudData.id} key={cloud.cloudData.id}>
                                        <td key={cloud.cloudData.id}>
                                            {cloud.cloudData.id}
                                        </td>

                                        <td id={cloud.cloudData.type_client} key={cloud.cloudData.type_client} >
                                            {cloud.cloudData.type_client}
                                        </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>


        );
    }

}



import React from 'react';

let url='http://localhost:3003/api/v1/organization?client_id=300';

export default class OnceOrg extends React.Component {
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
                <table>
                    <td>
                        <th>
                            ID
                        </th>

                        <th>
                            Type
                        </th>
                    </td>


                    {
                        this.state.clouds.map((cloud =>
                                <tr>
                                    <th>
                                        {cloud.cloudData.id}
                                    </th>

                                    <th>
                                        {cloud.cloudData.type_client}
                                    </th>
                                </tr>
                        ))
                    }
                </table>
            </div>
        );
    }

}



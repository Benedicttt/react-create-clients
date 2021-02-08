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

                {/*<table>*/}
                    {/*<td >*/}
                        {/*<th>*/}
                            {/*ID*/}
                        {/*</th>*/}
                    {/*</td>*/}

                    {/*<td >*/}
                        {/*<th>*/}
                            {/*Type*/}
                        {/*</th>*/}
                    {/*</td>*/}
                {/*</table>*/}

                {/*<tbody>*/}
                    {/*{*/}
                        {/*this.state.clouds.map((cloud =>*/}
                                {/*<tr key={cloud.cloudData.id}>*/}
                                    {/*<th key={cloud.cloudData.id}>*/}
                                        {/*<div>*/}
                                            {/*{cloud.cloudData.id}*/}
                                        {/*</div>*/}
                                    {/*</th>*/}

                                    {/*<th key={cloud.cloudData.type_client}>*/}
                                        {/*<div>*/}
                                            {/*{cloud.cloudData.type_client}*/}
                                        {/*</div>*/}
                                    {/*</th>*/}
                                {/*</tr>*/}
                        {/*))*/}
                    {/*}*/}
                {/*</tbody>*/}

            </div>


        );
    }

}



import React, {Component} from 'react';
import axios from 'axios';

import Choise from './Choise.js'

class Table extends Component {
    state = {
        dataDeps: '',
        dataArrs: '',
        depsShow: true
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://aviation-edge.com/v2/public/flights?key=c481d7-fca75d&depIata=SVO',
        })
            .then(response => {
                this.setState({dataDeps: response.data});
            })
            .catch(error => {
                console.log(error)
            })
        axios({
            method: 'get',
            url: 'http://aviation-edge.com/v2/public/flights?key=c481d7-fca75d&arrIata=SVO'
        })
            .then(response => {
                this.setState({dataArrs: response.data});
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        let updateData = (val) => {
            {this.setState({depsShow: !this.state.depsShow})}
        }

        let divData = (data) => {
            let numbers = [],
                planes = [],
                from = [],
                to = [],
                statuses = [],
                dataArr = [],
                resTrsArr = [];

            if (data.forEach) {
                data.forEach(flight => {
                    numbers.push(flight['flight']['iataNumber']);
                    planes.push(flight['aircraft']['iataCode']);
                    from.push(flight['departure']['iataCode']);
                    to.push(flight['arrival']['iataCode']);
                    statuses.push(flight['status']);
                });
            }

            dataArr.push(numbers, planes, from, to, statuses);

            for (let i = 0; i < numbers.length; i++) {
                let trArr = [];
                dataArr.forEach(arr => trArr.push(arr[i]));
                resTrsArr.push(trArr);
            }
            return resTrsArr;
        }
        return (
            <div>
                <Choise updateData={this.updateData}/>
                <h1>Departures</h1>
                <table>
                    <tbody>
                    <tr>
                        <th>Number</th>
                        <th>Plane</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>
                    </tr>
                    {
                        divData(this.state.dataDeps).map(arr => (
                            <tr>
                                {arr.map(item => (<td>{item}</td>))}
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
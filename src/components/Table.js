import React, {Component} from 'react';
import axios from 'axios';

import Choise from './Choise.js';
import getResTrsArr from '../getResTrsArr.js';

class Table extends Component {
    state = {
        dataDeps: '',
        dataArrs: '',
        depsShow: true,
        neededFlight: '',
        neededPlane: ''
    };

    updateData = () => {
        this.setState({depsShow: !this.state.depsShow})
    };
    filterByFlight = (flight) => {
        this.setState({neededFlight: flight})
    };
    filterByPlane = (plane) => {
        this.setState({neededPlane: plane})
    };
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
            });
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
        return (
            <div>
                <Choise updateData={this.updateData.bind(this)}
                        filterByFlight={this.filterByFlight.bind(this)}
                        filterByPlane={this.filterByPlane.bind(this)}
                />
                <h1>{this.state.depsShow ? 'Departures' : 'Arrives'}</h1>
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
                        getResTrsArr(this.state.depsShow ? this.state.dataDeps : this.state.dataArrs)
                            .map(arr => {
                                if (arr[0] === this.state.neededFlight) {
                                    return <tr className={'selectedTr1'}>
                                        {arr.map(item => (<td>{item}</td>))}
                                    </tr>
                                } else if (arr[1] === this.state.neededPlane) {
                                    return <tr className={'selectedTr2'}>
                                        {arr.map(item => (<td>{item}</td>))}
                                    </tr>
                                } else  return <tr>
                                    {arr.map(item => (<td>{item}</td>))}
                                </tr>
                            })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
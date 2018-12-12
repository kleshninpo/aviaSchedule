import React, {Component} from 'react';
import '../App.css';

class Choise extends Component {
    state = {
        buttonTextDeps: true,
    };
    render () {
        return (
            <div className={'choise'}>
                <button onClick={() => {
                    this.props.updateData(this.state.depsShow);
                    this.setState({buttonTextDeps: !this.state.buttonTextDeps})
                }}>
                    {this.state.buttonTextDeps ? 'Show Arrives' : 'Show Departures'}
                </button>
                <section>
                    <label htmlFor="#flightFilter">Enter the number of flight you need</label>
                    <input id={'flightFilter'} type="text" placeholder={'example: SU504'} onChange={
                        (ev) => {
                            this.props.filterByFlight(ev.target.value.toUpperCase());
                        }
                    }/>
                </section>
                <section>
                    <label htmlFor="#planeFilter">Enter the IATA code of plane you need</label>
                    <input id={'planeFilter'} type="text" placeholder={'example: A320'} onChange={
                        (ev) => {
                            this.props.filterByPlane(ev.target.value.toUpperCase());
                        }
                    }/>
                </section>
            </div>
        )
    }
}

export default Choise;
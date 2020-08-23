import React, { Component } from 'react'
import Switch from 'react-switch'


import TimePicker from 'react-time-picker'


class User extends React.Component {

    ///Toggle, Button ve Timerdate

    constructor(props) {
        super(props)

        this.state = {
            checked: false, disabled: true
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(checked) { this.setState({ checked }) }


    //saat1 

    onChange = time1 => this.setState({ time1 })

    //saat2 

    onChangee = time2 => this.setState({ time2 })

    render() {

        //Destructing 
        const { name, time1, time2 } = this.props;

        const { checked } = this.state;


        return (

            <div className="col col-md-4 mb-4">
                <div className="card bg-secondary text-bold">
                    <div className="card-header d-flex justify-context-between bg-warning text-dark">
                        <div className="d-inline">
                            <h3>{name}</h3>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-text font-weight-bold">Tatil Durumu</p>
                            </div>
                            <div className="col-md-6">
                                <Switch className="react-switch"
                                    onChange={this.handleChange}
                                    checked={this.state.checked} />
                            </div>
                        </div>


                        {checked ?
                            null
                            : <div className="row mt-2">
                                <div className="col-md-6">
                                    <p className="card-text font-weight-bold">Başlangıç: </p>
                                </div>
                                <div className="col-md-6">
                                    <TimePicker
                                        onChange={this.onChange}
                                        value={time1}

                                    />
                                </div>
                            </div>}

                        {checked ?
                            null
                            : <div className="row mt-2">
                                <div className="col-md-6">
                                    <p className="card-text font-weight-bold">Bitiş: </p>
                                </div>
                                <div className="col-md-6">
                                    <TimePicker
                                        onChange={this.onChangee}
                                        value={time2}
                                    />
                                </div>
                            </div>}
                        <button className="btn btn-warning mt-2 text-dark" disabled={this.state.checked || !this.state.time1 || !this.state.time2}>Kaydet</button>
                    </div>
                </div>

            </div>

        )
    }
}
export default User;
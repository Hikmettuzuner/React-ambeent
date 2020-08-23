import React, { Component } from 'react'
import Switch from 'react-switch'



import TimePicker from 'react-time-picker'

class UserHoliday extends Component {

    ///Toggle, Button ve Timer

    constructor(props) {
        super(props)

        this.state = {
            checked: true, time3: '', time4: '', disabled: true
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(checked) { this.setState({ checked }) }


    //saat3 

    onChangeee = time3 => this.setState({ time3 })

    //saat4 
    onChangeeee = time4 => this.setState({ time4 })

    render() {

        //Destructing Yöntemi
        const { name } = this.props;
        const { checked } = this.state;
        return (

            <div className="col-md-4 mb-4">
                <div className="card  text-white">
                    <div className="card-header d-flex justify-context-between text-white bg-info">
                        <div className="d-inline">
                            <h3>{name}</h3>
                        </div>
                    </div>
                    <div className="card-body bg-danger">
                        <h5 className="card-title"></h5>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-text font-weight-bold">Tatil Durumu</p>
                            </div>
                            <div className="col-md-6">
                                <Switch className="react-switch"
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                />
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
                                        onChange={this.onChangeee}
                                        value={this.state.time3}
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
                                        onChange={this.onChangeeee}
                                        value={this.state.time4}

                                    />
                                </div>
                            </div>}
                        <button className="btn btn-info mt-2" disabled={!this.state.time3 || !this.state.time4 || this.state.checked}>Kaydet</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserHoliday;




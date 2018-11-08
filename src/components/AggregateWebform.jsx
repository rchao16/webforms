import React, {Component} from 'react'
import 'bulma/css/bulma.css'

let data = {
    gender: {
        1: "Male",
        2: "Female"
    }
}

export default class AggregateWebform extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //state could also be created generically? 
            male:"",
            gender:"",
            age:"",
            ethnicity:"",
            race:""
        }
    }

    _handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })    
    }

    _handleSubmit = (evt) => {
        console.log("submit")
        console.log(this.state)
        this.setState({
            gender:"",
            age:"",
            ethnicity:"",
            race:"",
            male:""
        })
    }

    _createInput = (data) => {
        return (
            Object.keys(data).map( (e) => {
                return(
                    <div>
                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <label className="label"> {e} </label>
                                {(e) => {
                                    return(
                                        Object.keys(e).map((f) => {
                                            console.log(f)
                                            return (
                                                <div>
                                                    <label className="label"> {f}} </label>
                                                    <div className="control">
                                                            <input 
                                                            className="input" 
                                                            type="text" 
                                                            placeholder="Male" 
                                                            name="male"
                                                            value={this.state.firstName}
                                                            onChange={this._handleChange} 
                                                            />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) 
                                }}
                            </div>
                        </div>
                    </div>
                    
                )
            })     
        )
    }

    render() {
        return(
            
            <div>
                
                <h1>Aggregate Webform</h1>
                {/* <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <label className="label"> Gender </label>
                           <label className="label"> Male </label>
                           <div className="control">
                                <input 
                                className="input" 
                                type="text" 
                                placeholder="Male" 
                                name="male"
                                value={this.state.firstName}
                                onChange={this._handleChange} 
                                />
                            </div>
                    </div>
                </div> */}

                {this._createInput(data)}

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-link" type="submit" onClick={this._handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            

        )
    }
}
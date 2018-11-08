import React, {Component} from 'react'
import 'bulma/css/bulma.css'


export class IndividualForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //state could also be created generically? 
            firstName:"",
            lastName:"",
            email:"",
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
            firstName:"",
            lastName:"",
            email:"",
            gender:"",
            age:"",
            ethnicity:"",
            race:""
        })
    }

    render() {
        return(
            <div >
                <h1>Individual WebForm</h1>
                 {/*could pass some of these things in as array or object?*/}
                <div className="field is-grouped is-grouped-centered">
                <label className="label">First Name</label>
                    <div className="control">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this._handleChange} 
                        />
                    </div>
                </div>

                <div className="field is-grouped is-grouped-centered">
                <label className="label">Last Name</label>
                    <div className="control">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName} 
                        onChange={this._handleChange} />
                    </div>
                </div>

                

                <div className="field is-grouped is-grouped-centered">
                    <label className="label">Email</label>
                        <div className="control">
                            <input 
                            className="input" 
                            type="text" 
                            placeholder="Email" 
                            name="email"
                            value={this.state.email}
                            onChange={this._handleChange} />
                        </div>
                </div>

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <label className="label"> Gender </label>
                            <div className="select is-multiple">
                                <select name="gender" onChange={this._handleChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                    </div>
                </div>
                

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <label className="label"> Age </label>
                            <div className="select is-multiple">
                                <select multiple size="4" name="age" onChange={this._handleChange}>
                                    <option value="less than 5 Years">less than 5 Years</option>
                                    <option value="5-17 years">5-17 years</option>
                                    <option value="18-59 years">18-59 years</option>
                                    <option value="60 years or Older">60 years or Older</option>
                                </select>
                            </div>
                    </div>
                </div>
                
                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <label className="label"> Ethnicity </label>
                            <div className="select is-multiple">
                                <select multiple size="2" name="ethnicity" onChange={this._handleChange}>
                                    <option value="Hispanic/Latino">Hispanic/Latino</option>
                                    <option value="Non-Hispanic/Latino">Non-Hispanic/Latino</option>
                                </select>
                            </div>
                    </div>  
                </div>
                
                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <label className="label"> Race </label>
                            <div className="select is-multiple">
                                <select multiple size="6" name="race" onChange={this._handleChange}>
                                    <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                                    <option value="Asian">Asian</option>
                                    <option value="Black or African American">Black or African American</option>
                                    <option value="Native Hawaiian or other Pacific Islander">Native Hawaiian or other Pacific Islander</option>
                                    <option value="White">White</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                    </div>
                </div>

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-link" type="submit" onClick={this._handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            
        )
    }
}
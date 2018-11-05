import React, {Component} from 'react'
import 'bulma/css/bulma.css'


export default class IndividualForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            email:""
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
    }

    render() {
        return(
            <div >
                <h1>Individual WebForm</h1>
                 {/*could pass some of these thing in as array or object?*/}
                <div class="field">
                <label class="label">First Name</label>
                    <div class="control">
                        <input 
                        class="input" 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this._handleChange} 
                        />
                    </div>
                </div>

                <div class="field">
                <label class="label">Last Name</label>
                    <div class="control">
                        <input 
                        class="input" 
                        type="text" 
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName} 
                        onChange={this._handleChange} />
                    </div>
                </div>

                

                <div class="field">
                    <label class="label">Email</label>
                        <div class="control">
                            <input 
                            class="input" 
                            type="text" 
                            placeholder="Email" 
                            name="email"
                            value={this.state.email}
                            onChange={this._handleChange} />
                        </div>
                </div>

                <div class="field is-grouped is-grouped-centered">
                    <div class="control">
                        <label class="label"> Gender </label>
                            <div class="select is-multiple">
                                <select>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                    </div>
                </div>
                

                <div class="field is-grouped is-grouped-centered">
                    <div class="control">
                        <label class="label"> Age </label>
                            <div class="select is-multiple">
                                <select multiple size="4">
                                    <option value="less than 5 Years">less than 5 Years</option>
                                    <option value="5-17 years">5-17 years</option>
                                    <option value="18-59 years">18-59 years</option>
                                    <option value="60 years or Older">60 years or Older</option>
                                </select>
                            </div>
                    </div>
                </div>
                
                <div class="field is-grouped is-grouped-centered">
                    <div class="control">
                        <label class="label"> Ethnicity </label>
                            <div class="select is-multiple">
                                <select multiple size="2">
                                    <option value="Hispanic/Latino">Hispanic/Latino</option>
                                    <option value="Non-Hispanic/Latino">Non-Hispanic/Latino</option>
                                </select>
                            </div>
                    </div>  
                </div>
                
                <div class="field is-grouped is-grouped-centered">
                    <div class="control">
                        <label class="label"> Race </label>
                            <div class="select is-multiple">
                                <select multiple size="6">
                                    <option value="American Indian or Alaska Native" name>American Indian or Alaska Native</option>
                                    <option value="Asian">Asian</option>
                                    <option value="Black or African American">Black or African American</option>
                                    <option value="Native Hawaiian or other Pacific Islander">Native Hawaiian or other Pacific Islander</option>
                                    <option value="White">White</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                    </div>
                </div>

                <div class="field is-grouped is-grouped-centered">
                    <div class="control">
                        <button class="button is-link" type="submit" onClick={this._handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            
        )
    }
}
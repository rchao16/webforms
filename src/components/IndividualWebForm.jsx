import React, {Component} from 'react'
import 'bulma/css/bulma.css'


export default class IndividualForm extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <h1>Individual WebForm</h1>
                
                <div class="field">
                <label class="label">First Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="First Name" />
                    </div>
                </div>

                <div class="field">
                <label class="label">Last Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Last Name" />
                    </div>
                </div>

                <div class="field">
                <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Email" />
                    </div>
                </div>

                <label class="label"> Gender </label>
                <div class="select">
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <label class="label"> Age </label>
                <div class="select is-multiple">
                    <select multiple size="4">
                        <option value="Argentina">less than 5 Years</option>
                        <option value="Bolivia">5-17 years</option>
                        <option value="Brazil">18-59 years</option>
                        <option value="Chile">60 years or Older</option>
                    </select>
                </div>

            </div>
            
        )
    }
}
import React, {Component} from 'react'




export default class IndividualForm extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <h1> Individual Webform </h1>
                <form class="ui form">
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div class="field">
                        <label>Sex</label>
                        <div class="ui selection dropdown">
                            <input type="hidden" name="gender" />
                            <i class="dropdown icon"></i>
                            <div class="default text">Gender</div>
                            <div class="menu">
                                <div class="item" data-value="1">Male</div>
                                <div class="item" data-value="0">Female</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        )
    }
}
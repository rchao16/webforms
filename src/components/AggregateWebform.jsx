import React, {Component} from 'react'
import 'bulma/css/bulma.css'

let data = [
    {
        name: "Gender",
        child: [
            {name: "Male", child: []},
            {name: "Female", child: []}
        ]
    },
    {
        name: "Age",
        child: [
            {name: "Less than 5 Years", child: []},
            {name: "5-17 Years", child: []},
            {name: "19-59 Years", child:[]},
            {name: "60 Years or older", child: []}
        ]
    },
    {
        name: "Ethnicity",
        child: [
            {name: "Hispanic/Latino", child: []},
            {name: "Non-Hispanic/Latino", child: []}
        ]
    },
    {
        name: "Race",
        child: [
            {name: "American Indian or Alaska Native", child: []},
            {name: "Asian", child: []},
            {name: "Black or African American", child: []},
            {name: "Native Hawaiian or Other Pacific Islander", child: []},
            {name: "White", child: []},
            {name: "Other", child: []},
        ]
    }
]

export default class AggregateWebform extends Component {

    constructor(props) {
        super(props);
        this.state = {};
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
            // gender:"",
            // age:"",
            // ethnicity:"",
            // race:"",
            // male:""
            
        })
    }

    _createInput = (data) => {
        return data.map((elem) => {
            if(elem.child.length === 0) {
                return (
                    <div className="field is-grouped is-grouped-centered" key={elem.name}>
                        <div className="control">
                        <label className="label"> {elem.name} </label>
                        <input
                        className="input"
                        type="text"
                        name={elem.name}
                        onChange={this._handleChange}
                        />
                        {elem.child.length ? this._createInput(elem.child) : null}
                        </div>
                    </div>
                )
            }
            return (
                <div className="field is-grouped is-grouped-centered" key={elem.name}>
                    <div className="control">
                        <label className="label"> {elem.name}</label>
                        {elem.child.length ? this._createInput(elem.child) : null}
                    </div>
                </div>
            )
            
            
        })
    }

    render() {
        return(
            
            <div>
                
                <h1>Aggregate Webform</h1>

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
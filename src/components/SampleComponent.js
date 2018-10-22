import React, {Component} from 'react';

const dummyData = {
    "status": {
        "Triag": "Triag",
        "Pending More Information": "Pending More Information",
        "Jira|": "Jira",
        "Rejected": "Rejected",
        "Complete": "Complete"
      }
};

class SampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
    
      }
    
      
      handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    
      handleSubmit = (event) => {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
          console.log("props", this.props)
        return (
            <div>
                <h1>Some woohoo Wropdown components!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Status:
                        <select value={this.state.value} onChange={this.handleChange}>
                            {Object.keys(dummyData.status).map(
                                elem => {
                                    return (
                                        <option key={elem} value={elem}> {elem} </option>
                                    )
                                }
                            )}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
          
        );
      }
}

export default SampleComponent;
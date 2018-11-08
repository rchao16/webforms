import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'
import {
    IndividualForm
} from './components/IndividualWebForm.jsx'
import AggregateWebform from './components/AggregateWebform'

export default class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/individual" component={IndividualForm} />
                <Route path="/" component={AggregateWebform} />
            </Switch>
        )
    }
}
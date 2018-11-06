import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'
import {
    IndividualForm
} from './components/IndividualWebForm.jsx'

export default class Routes extends Component {
    render() {
        return(
                <Switch>
                    <Route path="/individual" component={IndividualForm} />
                </Switch>
        )
    }
}
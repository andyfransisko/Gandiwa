import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Location from '../Pages/Location'
import Contact from '../Pages/Contact'
import Form from '../Pages/Form'
import FormSuccess from '../Pages/FormSuccessPage'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import TermsConditions from '../Pages/TermsConditions'

export default function Routes(){
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/About" component={About} />

            <Route path="/Location" component={Location} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Form" component={Form} />
            <Route path="/FormSuccess" component={FormSuccess} />
            <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/TermsConditions" component={TermsConditions} />
            <Route component={Home} />
        </Switch>
    )
}
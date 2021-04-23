import { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import App from '../App'
import Page404 from '../pages/404'
import HomePage from '../pages/home'


const Routing: FC = () => {
	return (
		<Router>
			<App />
			<Switch>
				<Route exact path='/' component={HomePage} />			
				<Route exact component={Page404} />
			</Switch>
		</Router>
	)
}

export default Routing

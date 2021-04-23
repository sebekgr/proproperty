import { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import App from '../App'

const Home = () => <div>home</div>
const Users = () => <div>Users</div>

const Routing: FC = () => {
	return (
		<Router>
			<App />
			<Switch>
				<Route path='/users'>
					<Users />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routing

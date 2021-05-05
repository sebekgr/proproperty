import { FC } from 'react'
import { GlobalStyle } from './theme'
import { Grid } from './layout'
import Header from './elements/header'

const App: FC = () => {
	return (
		<>
		<GlobalStyle />
		<Grid>
			<Header />
		</Grid>
		</>
	)
}

export default App

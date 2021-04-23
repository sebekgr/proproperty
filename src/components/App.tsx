import { FC } from 'react'
import { GlobalStyle } from './theme'
import { MaxWidthSection, Grid } from './layout'
import Header from './elements/header'

const App: FC = () => {
	return (
		<Grid>
			<GlobalStyle />
			<MaxWidthSection>
				<Header />
			</MaxWidthSection>
		</Grid>
	)
}

export default App

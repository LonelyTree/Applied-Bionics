import React from 'react'
import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core'
import NavBar from './components/navBar'
import Masthead from './components/masthead'
import MissionStatement from './components/missionStatement'
import News from './components/news'
import Promos from './components/promos'
import InfoBar from './components/infoBar'
import Footer from './components/footer'
import { theme } from './theme'
import { useStyles } from './appStyles'

function App() {
	const classes = useStyles()
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid className={classes.root}>
				<NavBar />
				<Masthead />
				<MissionStatement />
				<News />
				<Promos />
				<InfoBar />
				<Footer />
			</Grid>
		</ThemeProvider>
	)
}

export default App

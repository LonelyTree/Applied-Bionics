import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		root: {
			width: '100vw',
			height: '12vh',
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		navBarContainer: {
			width: '100%',
			height: '100%',
			display: 'inline-flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			background: 'white',
		},
		logoContainer: {
			width: '50%',
			margin: '0 auto',
			justifyContent: 'center',
			alignContent: 'center',
		},
		logo: { width: '100%' },
		iconButton: {
			width: 'auto',
		},
		icon: {},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		root: {
			width: '100vw',
			height: '9vw',
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		navBarContainer: {
			width: '100%',
			height: '100%',
			display: 'inline-flex',
			justifyContent: 'space-around',
			background: 'white',
		},
		logoContainer: {
			width: '50%',
			margin: '0 auto',
			justifyContent: 'center',
			alignContent: 'center',
		},
		logo: { width: '50%' },
		iconButton: {
			width: 'auto',
		},
		icon: {},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		root: {
			width: '100vw',
			height: '9vw',
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		navBarContainer: {
			width: '100%',
			height: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			background: 'white',
		},
		logoContainer: {
			width: '50%',
			margin: '0 auto',
			justifyContent: 'center',
			alignContent: 'center',
		},
		logo: { width: '50%' },
		iconButton: {
			width: 'auto',
		},
		icon: {},
	},
	[theme.breakpoints.up('xl')]: {
		root: {
			width: '100vw',
			height: '5vw',
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		navBarContainer: {
			width: '100%',
			height: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			background: 'white',
		},
		logoContainer: {
			width: '40%',
			margin: '0 auto',
			justifyContent: 'center',
			alignContent: 'center',
		},
		logo: { width: '50%' },
		iconButton: {
			width: 'auto',
		},
		icon: {},
	},
}))

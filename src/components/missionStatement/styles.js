import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		missionRoot: {
			background: theme.palette.background.default,
			color: theme.palette.text.primary,
			letterSpacing: '1px',
		},
		mottoWrapper: { padding: '25px' },
		motto: {
			width: '100%',
			textAlign: 'center',
			fontSize: '35px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
		},
		mottoCopyright: { fontSize: '20px' },
		statementWrapper: { padding: '0 7.5% 20px' },
		missionStatement: {},
		buttonWrapper: {
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		button: {
			background: theme.palette.secondary.main,
			width: '75%',
			marginBottom: '30px',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		missionRoot: {
			background: theme.palette.background.default,
			color: theme.palette.text.primary,
			letterSpacing: '1px',
		},
		mottoWrapper: {
			paddingTop: '65px',
			paddingBottom: '0px',
		},
		motto: {
			width: '100%',
			textAlign: 'center',
			fontSize: '3.5vw',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
		},
		mottoCopyright: { fontSize: '20px' },
		statementWrapper: { padding: '0 4.5% 20px' },
		missionStatement: {},
		buttonWrapper: {
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around',
			marginBottom: '40px',
		},
		button: {
			background: theme.palette.secondary.main,
			width: '40%',
			marginBottom: '30px',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		missionRoot: {
			background: theme.palette.background.default,
			color: theme.palette.text.primary,
			letterSpacing: '1px',
		},
		mottoWrapper: {
			paddingTop: '65px',
			paddingBottom: '0px',
		},
		motto: {
			width: '100%',
			textAlign: 'center',
			fontSize: '3.5vw',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
		},
		mottoCopyright: { fontSize: '20px' },
		statementWrapper: { padding: '0 4.5% 20px' },
		missionStatement: {},
		buttonWrapper: {
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			marginBottom: '40px',
		},
		button: {
			background: theme.palette.secondary.main,
			width: '30%',
			marginBottom: '30px',
		},
	},
	[theme.breakpoints.up('xl')]: {
		missionRoot: {
			background: theme.palette.background.default,
			color: theme.palette.text.primary,
			letterSpacing: '1px',
		},
		mottoWrapper: {
			paddingTop: '65px',
			paddingBottom: '0px',
		},
		motto: {
			width: '100%',
			textAlign: 'center',
			fontSize: '2vw',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
		},
		mottoCopyright: { fontSize: '20px' },
		statementWrapper: { padding: '0 4.5% 20px' },
		missionStatement: {},
		buttonWrapper: {
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			marginBottom: '40px',
		},
		button: {
			background: theme.palette.secondary.main,
			width: '20%',
			marginBottom: '30px',
		},
	},
}))

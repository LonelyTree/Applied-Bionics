import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		newsRoot: {
			background: theme.palette.secondary.dark,
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBottom: '30px',
		},
		headerRoot: {
			marginTop: '50px',
			marginBottom: '0',
			fontSize: '25px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			textAlign: 'center',
			letterSpacing: '1px',
		},
		newsContainer: {
			display: 'inline-flex',
			justifyContent: 'center',
		},
		newsWrapper: {
			'width': '85%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'alignItems': 'center',
			'justifyContent': 'center',
			'background': theme.palette.secondary.light,
			'marginTop': '20px',
			'marginBottom': '0px',
			'& a': {
				textDecoration: 'none',
				color: theme.palette.text.primary,
			},
		},
		imageWrapper: {},
		image: { width: '100%' },
		infoWrapper: {
			width: '80%',
			margin: '0 auto',
		},
		infoHeader: { fontSize: '20px' },
		paragraph: {},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		newsRoot: {
			background: theme.palette.secondary.dark,
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBottom: '30px',
		},
		headerRoot: {
			marginTop: '50px',
			marginBottom: '0',
			fontSize: '25px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			textAlign: 'center',
			letterSpacing: '1px',
		},
		newsContainer: {
			display: 'inline-flex',
			flexDirection: 'row',
			justifyContent: 'center',
		},
		newsWrapper: {
			'width': '45%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'alignItems': 'center',
			'justifyContent': 'center',
			'background': theme.palette.secondary.light,
			'margin': '10px',
			'marginTop': '20px',
			'& a': {
				textDecoration: 'none',
				color: theme.palette.text.primary,
			},
		},
		imageWrapper: {},
		image: { width: '100%' },
		infoWrapper: {
			width: '80%',
			margin: '0 auto',
		},
		infoHeader: { fontSize: '20px' },
		paragraph: { lineHeight: '130%' },
	},
	[theme.breakpoints.between('md', 'lg')]: {
		newsRoot: {
			background: theme.palette.secondary.dark,
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBottom: '30px',
		},
		headerRoot: {
			marginTop: '50px',
			marginBottom: '0',
			fontSize: '25px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			textAlign: 'center',
			letterSpacing: '1px',
		},
		newsContainer: {
			display: 'inline-flex',
			flexDirection: 'row',
			justifyContent: 'center',
		},
		newsWrapper: {
			'width': '30%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'alignItems': 'center',
			'justifyContent': 'center',
			'background': theme.palette.secondary.light,
			'margin': '10px',
			'marginTop': '20px',
			'& a': {
				textDecoration: 'none',
				color: theme.palette.text.primary,
			},
		},
		imageWrapper: {},
		image: { width: '100%' },
		infoWrapper: {
			width: '80%',
			margin: '0 auto',
		},
		infoHeader: { fontSize: '20px' },
		paragraph: { lineHeight: '130%' },
	},
	[theme.breakpoints.between('lg', 'xl')]: {
		newsRoot: {
			background: theme.palette.secondary.main,
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBottom: '30px',
		},
		headerRoot: {
			marginTop: '4vw',
			marginBottom: '0',
			fontSize: '25px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			textAlign: 'center',
			letterSpacing: '1px',
		},
		newsContainer: {
			display: 'inline-flex',
			flexDirection: 'row',
			justifyContent: 'center',
		},
		newsWrapper: {
			'width': '30%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'alignItems': 'center',
			'justifyContent': 'center',
			'background': theme.palette.secondary.light,
			'margin': '10px',
			'marginTop': '20px',
			'& a': {
				textDecoration: 'none',
				color: theme.palette.text.primary,
			},
		},
		imageWrapper: {},
		image: { width: '100%' },
		infoWrapper: {
			width: '80%',
			margin: '0 auto',
		},
		infoHeader: {
			fontSize: '20px',
			width: '100%',
			color: theme.palette.text.primary,
			borderBottom: '2px solid white',
			textAlign: 'center',
		},
		paragraph: {
			lineHeight: '130%',
			color: theme.palette.secondary.dark,
		},
	},
	[theme.breakpoints.up('xl')]: {
		newsRoot: {
			background: theme.palette.secondary.dark,
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBottom: '30px',
		},
		headerRoot: {
			marginTop: '4vw',
			marginBottom: '0',
			fontSize: '25px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			textAlign: 'center',
			letterSpacing: '1px',
		},
		newsContainer: {
			display: 'inline-flex',
			flexDirection: 'row',
			justifyContent: 'center',
		},
		newsWrapper: {
			'width': '30%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'alignItems': 'center',
			'justifyContent': 'center',
			'background': theme.palette.secondary.light,
			'margin': '10px',
			'marginTop': '20px',
			'& a': {
				textDecoration: 'none',
				color: theme.palette.text.primary,
			},
		},
		imageWrapper: {},
		image: { width: '100%' },
		infoWrapper: {
			width: '80%',
			margin: '0 auto',
		},
		infoHeader: { fontSize: '20px' },
		paragraph: { lineHeight: '130%' },
	},
}))
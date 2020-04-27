import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		mastheadRoot: {
			background: theme.palette.secondary.main,
		},
		mastheadWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		imageWrapper: {},
		image: { width: '100%' },
		descWrapper: { width: '95%' },
		descHeader: {
			fontSize: '25px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
		},
		descButton: {
			background: theme.palette.primary.main,
			marginBottom: '20px',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		mastheadRoot: {
			background: theme.palette.secondary.main,
		},
		mastheadWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		imageWrapper: {},
		image: { width: '100%' },
		descWrapper: { width: '95%' },
		descHeader: {
			fontSize: '25px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
		},
		descButton: {
			background: theme.palette.primary.main,
			marginBottom: '20px',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		mastheadRoot: {
			background: theme.palette.secondary.main,
			width: '100vw',
		},
		mastheadWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'start',
			justifyContent: 'flex-end',
			height: '50vh',
			backgroundImage: `url(${'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/02/14/brain.jpg?w968'})`,
			backgroundSize: 'contain',
		},
		imageWrapper: {},
		image: { width: '100%' },
		descWrapper: {
			width: '50%',
			marginBottom: '5vh',
			background: '#22232285',
		},
		descHeader: {
			fontSize: '25px',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
			marginLeft: '3vw',
			color: theme.palette.text.primary,
		},
		descButton: {
			background: theme.palette.primary.main,
			marginBottom: '20px',
			marginLeft: '3vw',
		},
	},
	[theme.breakpoints.between('lg', 'xl')]: {
		mastheadRoot: {
			background: theme.palette.secondary.main,
			width: '100vw',
		},
		mastheadWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'start',
			justifyContent: 'flex-end',
			height: '70vh',
			backgroundImage: `url(${'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/02/14/brain.jpg?w968'})`,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
		},
		imageWrapper: {},
		image: { width: '100%' },
		descWrapper: {
			width: '30%',
			marginBottom: '5vh',
			marginLeft: '20px',
			background: '#222322c7',
		},
		descHeader: {
			fontSize: '2vw',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
			marginLeft: '3vw',
			color: theme.palette.text.primary,
		},
		descButton: {
			background: theme.palette.primary.main,
			marginBottom: '20px',
			marginLeft: '3vw',
		},
	},
	[theme.breakpoints.up('xl')]: {
		mastheadRoot: {
			background: theme.palette.secondary.main,
		},
		mastheadWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'start',
			justifyContent: 'flex-end',
			height: '70vh',
			backgroundImage: `url(${'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/02/14/brain.jpg?w968'})`,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
		},
		imageWrapper: {},
		image: { width: '100%' },
		descWrapper: {
			width: '30%',
			marginBottom: '5vh',
			background: '#222322c7',
		},
		descHeader: {
			fontSize: '2vw',
			fontFamily: 'IBM Plex Sans, sans-serif',
			letterSpacing: '1px',
			marginLeft: '3vw',
			color: theme.palette.text.primary,
		},
		descButton: {
			background: theme.palette.primary.main,
			marginBottom: '20px',
			marginLeft: '3vw',
		},
	},
}))

import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		infoRoot: {
			width: '85%',
			marginBottom: '35px',
		},
		infoWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			width: '100%',
		},
		infoHeader: {
			fontSize: '4.5vw',
			color: theme.palette.text.primary,
			marginTop: '50px',
		},
		descWrapper: {
			width: '150px',
			display: 'inline-flex',
			justifyContent: 'space-between',
			textAlign: 'start',
			flexDirection: 'row',
		},
		infoDesc: {
			fontSize: '3.7vw',
			color: theme.palette.text.secondary,
			marginTop: '2px',
			letterSpacing: '1px',
		},

		arrow: { fontSize: '15px', marginTop: '4px' },
	},
	[theme.breakpoints.between('sm', 'md')]: {
		infoRoot: {
			width: '90%',
			margin: '0 auto',
			marginBottom: '35px',
			display: 'inline-flex',
			justifyContent: 'space-evenly',
		},
		infoWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			width: '100%',
		},
		infoHeader: {
			fontSize: '2.2vw',
			color: theme.palette.text.primary,
			marginTop: '50px',
		},
		descWrapper: {
			width: '140px',
			height: '3vw',
			display: 'inline-flex',
			justifyContent: 'space-between',
			textAlign: 'start',
			flexDirection: 'row',
		},
		infoDesc: {
			fontSize: '1.7vw',
			color: theme.palette.text.secondary,
			marginTop: '1px',
			letterSpacing: '1px',
		},

		arrow: { fontSize: '15px', marginTop: '4px' },
	},
	[theme.breakpoints.between('md', 'lg')]: {
		infoRoot: {
			width: '90%',
			marginBottom: '35px',
			display: 'inline-flex',
			justifyContent: 'space-evenly',
			marginLeft: '5vw',
		},
		infoWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			width: '100%',
		},
		infoHeader: {
			fontSize: '2.2vw',
			color: theme.palette.text.primary,
			marginTop: '50px',
		},
		descWrapper: {
			width: '140px',
			height: '3vw',
			display: 'inline-flex',
			justifyContent: 'space-between',
			textAlign: 'start',
			flexDirection: 'row',
		},
		infoDesc: {
			fontSize: '1.7vw',
			color: theme.palette.text.secondary,
			marginTop: '1px',
			letterSpacing: '1px',
		},

		arrow: { fontSize: '15px', marginTop: '4px' },
	},
	[theme.breakpoints.up('xl')]: {
		infoRoot: {
			width: '90%',
			marginBottom: '35px',
			display: 'inline-flex',
			justifyContent: 'space-evenly',
			marginLeft: '5vw',
		},
		infoWrapper: {
			display: 'inline-flex',
			flexDirection: 'column',
			width: '100%',
		},
		infoHeader: {
			fontSize: '1.2vw',
			color: theme.palette.text.primary,
			marginTop: '50px',
		},
		descWrapper: {
			width: '10vw',
			height: '2vw',
			display: 'inline-flex',
			justifyContent: 'space-between',
			textAlign: 'start',
			flexDirection: 'row',
		},
		infoDesc: {
			fontSize: '1vw',
			color: theme.palette.text.secondary,
			marginTop: '1px',
			letterSpacing: '1px',
		},

		arrow: { fontSize: '15px', marginTop: '4px' },
	},
}))

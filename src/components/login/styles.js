import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		loginWrapper: {
			width: 'auto',
			marginRight: '2%',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		loginWrapper: {
			width: 'auto',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		loginWrapper: {
			width: 'auto',
		},
	},
	[theme.breakpoints.up('xl')]: {
		loginWrapper: {
			width: 'auto',
		},
	},
}))

import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.up('sm')]: {
		root: {
			display: 'inline-flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {},
	[theme.breakpoints.between('md', 'lg')]: {},
	[theme.breakpoints.up('xl')]: {},
}))

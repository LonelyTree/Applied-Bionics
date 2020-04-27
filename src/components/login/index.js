import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useStyles } from './styles'

export default function Login() {
	const classes = useStyles()
	return (
		<Grid container item className={classes.loginWrapper}>
			<Button
				color='primary'
				size='small'
				aria-label='Login'
				variant='outlined'
				className={classes.loginButton}
			>
				Login
			</Button>
		</Grid>
	)
}

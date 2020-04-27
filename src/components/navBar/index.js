import React from 'react'
import { Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Login from '../login'
import Logo from '../../img/appliedBionicsLogo.png'
import { useStyles } from './styles'

export default function NavBar() {
	const classes = useStyles()
	return (
		<Grid className={classes.root}>
			<Grid container className={classes.navBarContainer}>
				<IconButton
					color='primary'
					aria-label='upload picture'
					component='span'
					className={classes.iconButton}
				>
					<MenuIcon className={classes.icon} />
				</IconButton>
				<Grid item container className={classes.logoContainer}>
					<img className={classes.logo} src={Logo} alt='Applied Bionics Logo' />
				</Grid>
				<Login />
			</Grid>
		</Grid>
	)
}

import React from 'react'
import { Grid, Button } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useStyles } from './styles'
import { theme } from '../../theme'

export default function Masthead() {
	const classes = useStyles()
	const notIphone = useMediaQuery(theme.breakpoints.up('md'))

	return notIphone ? (
		<Grid className={classes.mastheadRoot}>
			<Grid container className={classes.mastheadWrapper}>
				<Grid container item className={classes.descWrapper}>
					<h1 className={classes.descHeader}>
						Carbon Neurotransmitters: Paving The Way For Cerebral Interlacing
					</h1>
					<Button className={classes.descButton} variant='outlined'>
						Learn More
					</Button>
				</Grid>
			</Grid>
		</Grid>
	) : (
		<Grid className={classes.mastheadRoot}>
			<Grid container className={classes.mastheadWrapper}>
				<Grid container item className={classes.imageWrapper}>
					<img
						src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/02/14/brain.jpg?w968'
						alt='masthead img'
						className={classes.image}
					/>
				</Grid>
				<Grid container item className={classes.descWrapper}>
					<h1 className={classes.descHeader}>
						Carbon Neurotransmitters: Paving The Way For Cerebral Interlacing
					</h1>
					<Button className={classes.descButton} variant='outlined'>
						Learn More
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

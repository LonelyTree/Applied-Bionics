import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useStyles } from './styles'

export default function MissionStatement() {
	const classes = useStyles()

	return (
		<Grid className={classes.missionRoot}>
			<Grid container className={classes.mottoWrapper}>
				<h1 className={classes.motto}>
					Applied Bionics. Working on you, for you.
					<sup className={classes.mottoCopyright}>®</sup>
				</h1>
			</Grid>
			<Grid container item className={classes.statementWrapper}>
				<p className={classes.missionStatement}>
					Every day, our 210,000 employees around the world come to work with
					one focus – to work on you. Whether it's protecting citizens from
					engineered pathogens or advancing the boundaries of human biology,
					these directives are some of the most important and challenging in the
					world. We bring an unwavering determination to help our customers grow
					in leaps and bounds, and it’s that sense of purpose and opportunity to
					make a difference in the world that drives us every day.
				</p>
			</Grid>
			<Grid container className={classes.buttonWrapper}>
				<Button className={classes.button}>See How We Make You Better</Button>
				<Button className={classes.button}>Read Stories of Innovation</Button>
			</Grid>
		</Grid>
	)
}

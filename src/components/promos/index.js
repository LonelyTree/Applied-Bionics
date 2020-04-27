import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useStyles } from './styles'
import { data } from './data'

export default function Promos() {
	const classes = useStyles()

	let newsPushed = []

	function listValues(value, key, map) {
		newsPushed.push(
			<Grid
				key={value[0]}
				className={classes.promoWrapper}
				style={{ backgroundImage: `url(${key})` }}
			>
				<Grid container item className={classes.infoWrapper}>
					<h1 className={classes.infoHeader} key={value[1]}>
						{value[0]}
					</h1>
					<p className={classes.paragraph}>{value[1]}</p>
				</Grid>
				<Button className={classes.button}>Learn More</Button>
			</Grid>
		)
	}
	data.forEach(listValues)

	return <Grid className={classes.promoRoot}>{newsPushed}</Grid>
}

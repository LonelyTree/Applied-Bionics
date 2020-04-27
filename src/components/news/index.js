import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useStyles } from './styles'
import { data } from './data'

export default function News() {
	const classes = useStyles()

	let newsPushed = []

	function listValues(value, key, map) {
		newsPushed.push(
			<Grid key={value[0]} className={classes.newsWrapper}>
				<a href='null'>
					<Grid container className={classes.imageWrapper}>
						<img src={key} className={classes.image} />
					</Grid>
					<Grid container item className={classes.infoWrapper}>
						<h1 className={classes.infoHeader} key={value[1]}>
							{value[0]}
						</h1>
						<p className={classes.paragraph}>{value[1]}</p>
					</Grid>
				</a>
			</Grid>
		)
	}
	data.forEach(listValues)

	return (
		<Grid className={classes.newsRoot}>
			<h1 className={classes.headerRoot}>Applied Bionics News</h1>
			<Grid container item className={classes.newsContainer}>
				{newsPushed}
			</Grid>
		</Grid>
	)
}

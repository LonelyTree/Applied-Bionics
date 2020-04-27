import React from 'react'
import { Grid } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { useStyles } from './styles'
import { info } from './info'

export default function InfoBar() {
	const classes = useStyles()
	let named = []

	function listValues(value, key, map) {
		let values = value.map((val) => {
			return (
				<Grid container item className={classes.descWrapper} key={val}>
					<p key={val + 1} className={classes.infoDesc}>
						{val}
					</p>
					<ArrowForwardIosIcon className={classes.arrow} key={val + 2} />
				</Grid>
			)
		})
		named.push(
			<Grid key={key} className={classes.infoWrapper}>
				<h1 className={classes.infoHeader} key={key}>
					{key}
				</h1>
				{values}
			</Grid>
		)
	}
	info.forEach(listValues)

	return <Grid className={classes.infoRoot}>{named}</Grid>
}

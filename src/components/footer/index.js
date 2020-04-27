import React from 'react'
import { Grid } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Logo from '../../img/appliedBionicsLogo.png'
import { useStyles } from './styles'

export default function Footer() {
	const classes = useStyles()
	return (
		<Grid className={classes.footerRoot}>
			<Grid container item className={classes.logoWrapper}>
				<a className={classes.logoLink} href='null'>
					<img
						className={classes.footerLogo}
						src={Logo}
						alt='Applied Bionics Logo'
					/>
				</a>
			</Grid>
			<Grid container item className={classes.copyrightWrapper}>
				<p className={classes.copyright}>
					© 2020 Applied Bionics Corporation. All Rights Reserved.
				</p>
				<span className={classes.subCopyright}>
					Privacy <ArrowForwardIosIcon className={classes.arrow} />
				</span>
				<span className={classes.subCopyright}>
					Terms of Use <ArrowForwardIosIcon className={classes.arrow} />
				</span>
				<span className={classes.subCopyright}>
					EU Data Protection Notice
					<ArrowForwardIosIcon className={classes.arrow} />
				</span>
				<span className={classes.subCopyright}>
					Cookies
					<ArrowForwardIosIcon className={classes.arrow} />
				</span>
				<p className={classes.stockPrice}>Stock Price[ 1789.91 ]</p>
			</Grid>
			<Grid container className={classes.socialWrapper}>
				<Grid container item className={classes.iconWrapper}>
					<FacebookIcon className={classes.socialIcon} />
					<TwitterIcon className={classes.socialIcon} />
					<YouTubeIcon className={classes.socialIcon} />
					<LinkedInIcon className={classes.socialIcon} />
					<InstagramIcon className={classes.socialIcon} />
				</Grid>
			</Grid>
		</Grid>
	)
}

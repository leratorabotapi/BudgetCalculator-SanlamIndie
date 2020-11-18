import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const useStyles = makeStyles({
  root: {
    width: 500
  }
})

function BottomNav () {
  const classes = useStyles()
  const [value, setValue] = React.useState('dashboard')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
        <div>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Dashboard" value="dashboard" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Budget" value="budet" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Transactions" value="transactions" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Reports" value="reports" icon={<FolderIcon />} />
    </BottomNavigation>

        </div>
  )
}

export default BottomNav

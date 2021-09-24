import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import { useSelector } from 'react-redux'

const TotalCustomers = (props) => {
  const users = useSelector(state => state.user.users)
  const user = users.length
  return (
    <Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color='textSecondary'
              gutterBottom
              variant='h6'
            >
              Usuarios
            </Typography>
            <Typography
              color='textPrimary'
              variant='h3'
            >
              {`${user} usuario(s)`}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56
              }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        />
      </CardContent>
    </Card>
  )
}

export default TotalCustomers

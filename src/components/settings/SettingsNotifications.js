import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  FormGroup,
  Switch
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setConfigs, getConfigs } from '../../redux/actions/config'
const SettingsNotifications = () => {
  const [options, setOptions] = useState({
    mailCreateAccount: false,
    mailConfirmCart: false,
    mailDispatched: false,
    mailDelivered: false,
    mailCanceled: false,
    smsCreateAccount: false,
    smsConfirmCart: false,
    smsDispatched: false,
    smsDelivered: false,
    smsCanceled: false
  })
  const configs = useSelector(store => store.config.notificationsConfig)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConfigs())
    setOptions(configs)
    console.log(configs)
    console.log('config')
  }, [dispatch])

  const handleChange = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.checked })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(dispatch)
    dispatch(setConfigs(options))
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Card>
        <CardHeader
          title='Notificaciones'
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap='wrap'
            style={{justifyContent:'center'}}
          >
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
              xs={12}
            >
              <Typography
                color='textPrimary'
                gutterBottom
                variant='h6'
              >
                Notificaciones de email
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={options.mailCreateAccount} onChange={handleChange} name='mailCreateAccount' />}
                  label='Creacion de cuenta'
                />
                <FormControlLabel
                  control={<Switch checked={options.mailConfirmCart} onChange={handleChange} name='mailConfirmCart' />}
                  label='Venta confirmada'
                />
                <FormControlLabel
                  control={<Switch checked={options.mailDispatched} onChange={handleChange} name='mailDispatched' />}
                  label='Pedido enviado'
                />
                <FormControlLabel
                  control={<Switch checked={options.mailDelivered} onChange={handleChange} name='mailDelivered' />}
                  label='Pedido entregado'
                />
                <FormControlLabel
                  control={<Switch checked={options.mailCanceled} onChange={handleChange} name='mailCanceled' />}
                  label='Pedido cancelado'
                />
              </FormGroup>

            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
              xs={12}
            >
              <Typography
                color='textPrimary'
                gutterBottom
                variant='h6'
              >
                Notificaciones de SMS
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={options.smsCreateAccount} onChange={handleChange} name='smsCreateAccount' />}
                  label='Creacion de cuenta'
                />
                <FormControlLabel
                  control={<Switch checked={options.smsConfirmCart} onChange={handleChange} name='smsConfirmCart' />}
                  label='Venta confirmada'
                />
                <FormControlLabel
                  control={<Switch checked={options.smsDispatched} onChange={handleChange} name='smsDispatched' />}
                  label='Pedido enviado'
                />
                <FormControlLabel
                  control={<Switch checked={options.smsDelivered} onChange={handleChange} name='smsDelivered' />}
                  label='Pedido entregado'
                />
                <FormControlLabel
                  control={<Switch checked={options.smsCanceled} value={options.smsCanceled} onChange={handleChange} name='smsCanceled' />}
                  label='Pedido cancelado'
                />
              </FormGroup>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color='primary'
            variant='contained'
            type='submit'
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  )
}
export default SettingsNotifications

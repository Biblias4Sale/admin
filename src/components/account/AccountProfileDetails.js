import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core'
import { validate } from '../../Helpers/formValidate'
import stylex from './AcoountProfileDetails.module.css'
import { useSelector, useDispatch } from 'react-redux'
// import { ApiURL } from 'src/config'
import { editUser } from 'src/redux/actions/user'
import { toastCustom } from '../../Tools/Toastify'
const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    province: '',
    cp: 8000,
    address: '',
    city: '',
    picture: '',
    type: ''
  })

  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()
  const user = useSelector(store => store.user.logged)

  const handleChange = (e) => {
    validate(e.target.value, e.target.name, setErrors)
    setValues({
      ...values,
      type: user.user.type,
      changed: true,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    setValues({
      name: user.user.name,
      lastName: user.user.lastName,
      email: user.user.email,
      phone: user.user.phone,
      province: user.user.province,
      cp: user.user.cp,
      address: user.user.address,
      city: user.user.city,
      picture: user.user.picture,
      type: user.user.type
    })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    try {
      dispatch(editUser(user.user.id, values, user.tokken))
      toastCustom('Los datos han sido modificados', 'success', 4000, 'bottom-right')
    } catch (e) {
      toastCustom('No se pudieron modificar los datos', 'error', 4000, 'bottom-right')
    }
  }

  return (
    <form
      autoComplete='off'
      noValidate
      {...props}
      onSubmit={onSubmit}
    >
      <Card>
        <CardHeader
          subheader='Puedes actualizar tu información de perfil'
          title='PERFIL'
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText='Please specify the first name'
                label='Nombre'
                name='name'
                onChange={handleChange}
                required
                value={values.name}
                variant='outlined'
              />
              {/* ERROR EN NAME */}
              {errors.name && <h3 className={stylex.error}> -{errors.name}- </h3>}

            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Apellido'
                name='lastName'
                onChange={handleChange}
                required
                value={values.lastName}
                variant='outlined'
              />
              {/* ERROR EN LASTNAME */}
              {errors.lastName && <h3 className={stylex.error}> -{errors.lastName}- </h3>}

            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Correo Electrónico'
                name='email'
                onChange={handleChange}
                required
                value={values.email}
                variant='outlined'
              />
              {/* ERROR EN email */}
              {errors.email && <h3 className={stylex.error}> -{errors.email}- </h3>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Número telefónico'
                name='phone'
                onChange={handleChange}
                type='number'
                value={values.phone}
                variant='outlined'
              />
              {/* ERROR EN PHONE */}
              {errors.phone && <h3 className={stylex.error}> -{errors.phone}- </h3>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Domicilio'
                name='address'
                onChange={handleChange}
                value={values.address}
                variant='outlined'
              />
              {/* ERROR EN ADDRESS */}
              {errors.address && <h3 className={stylex.error}> -{errors.address}- </h3>}
            </Grid>

            {/* <Grid item md={6} xs={12}>
               <TextField
                fullWidth
                label='Provincia'
                name='province'
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.province}
                variant='outlined'
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              </Grid> */}

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Código Postal'
                name='cp'
                onChange={handleChange}
                type='number'
                value={values.cp}
                variant='outlined'
              />
              {/* ERROR EN CP */}
              {errors.cp && <h3 className={stylex.error}> -{errors.cp}- </h3>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Provincia'
                name='province'
                onChange={handleChange}
                value={values.province}
                variant='outlined'
              />
              {/* ERROR EN PROVINCE */}
              {errors.province && <h3 className={stylex.error}> -{errors.province}- </h3>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Google ID'
                name='googleId'
                onChange={handleChange}
                value={values.googleId}
                variant='outlined'
              />
              {/* ERROR EN GOOGLE ID */}
              {errors.googleId && <h3 className={stylex.error}> -{errors.googleId}- </h3>}
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          {!errors.name && !errors.lastName && !errors.email && !errors.phone && !errors.province && !errors.cp && !errors.address && !errors.city && !errors.picture
            ? (
              <Button
                color='primary'
                variant='contained'
                onClick={onSubmit}
              >
                GUARDAR CAMBIOS
              </Button>
              )
            : (
              <Button
                color='primary'
                variant='contained'
                disabled
              >
                GUARDAR CAMBIOS
              </Button>

              )}
          {/* <Button
            color='primary'
            variant='contained'
          >
            GUARDAR CAMBIOS
          </Button> */}

        </Box>
      </Card>
    </form>
  )
}

export default AccountProfileDetails

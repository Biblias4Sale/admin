import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import CustomerListResults from '../components/customer/CustomerListResults'
import CustomerListToolbar from '../components/customer/CustomerListToolbar'
import GroupButtons from '../Resources/GroupButtons'
import customers from '../__mocks__/customers'
import { useSelector } from 'react-redux'

const AdminList = () => {
  const user = useSelector(store => store.user.logged.user)

  if (user.type !== 'Super') {
    return (
      <div> <h2>No podés estar acá rey.</h2></div>
    )
  }
  return (

    <>
      <Helmet>
        <title>Noiloan | Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults userType='User' />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default AdminList

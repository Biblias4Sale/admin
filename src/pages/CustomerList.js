import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import CustomerListResults from '../components/customer/CustomerListResults'
import CustomerListToolbar from '../components/customer/CustomerListToolbar'
import GroupButtons from '../Resourses/GroupButtons'
import customers from '../__mocks__/customers'

const CustomerList = () => (

  <>
    <Helmet>
      <title>Customers | Material Kit</title>
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
          <CustomerListResults userType='Admin' />
        </Box>
      </Container>
    </Box>
  </>
)

export default CustomerList

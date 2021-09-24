import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
// import { FakeContext } from 'src/FakeContext'
import PaymentList from 'src/components/payments/paymentsList'
// import { PaymentModal } from 'src/components/dashboard/PaymentModal'

const AllPayments = () => {
  // const {
  //   allPayments,
  //   paymentByID,
  //   open,
  //   handleOpen,
  //   handleClose
  // } = FakeContext()
  return (
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
          <PaymentList
            // allPayments={allPayments}
            // handleOpen={handleOpen}
          />
          {/* <PaymentModal
            open={open}
            handleClose={handleClose}
            paymentByID={paymentByID}
          /> */}
        </Container>
      </Box>
    </>
  )
}

export default AllPayments

import { Helmet } from 'react-helmet'
import { Box, Container, Grid } from '@material-ui/core'
import Budget from '../components/dashboard/Budget'
import LatestOrders from '../components/dashboard/LatestOrders'
import LatestProducts from '../components/dashboard/LatestProducts'
import TotalCustomers from '../components/dashboard/TotalCustomers'
import TotalProfit from '../components/dashboard/TotalProfit'
import { useState, useEffect } from 'react'
import { FakeContext } from 'src/FakeContext'
import { getAllPayments, getPaymentById } from 'src/redux/actions/getPayments'
import { PaymentModal } from '../components/dashboard/PaymentModal'

const Dashboard = () => {
  const {
    dispatch,
    allPayments,
    paymentByID
  } = FakeContext()

  const [open, setOpen] = useState(false)
  const handleOpen = (id) => {
    setOpen(true)
    dispatch(getPaymentById(id))
  }
  const handleClose = () => setOpen(false)

  useEffect(() => {
    dispatch(getAllPayments())
  }, [5000])

  return (
    <>
      <Helmet>
        <title>Dashboard | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget />
            </Grid>
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalCustomers />
            </Grid>
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalProfit sx={{ height: '100%' }} />
            </Grid>

            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <LatestProducts sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <LatestOrders
                allPayments={allPayments}
                handleOpen={handleOpen}
              />
              {/* <PaymentModal
                open={open}
                handleClose={handleClose}
                paymentByID={paymentByID}
              /> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Dashboard

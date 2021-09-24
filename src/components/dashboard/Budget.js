import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import MoneyIcon from '@material-ui/icons/Money'
import { red } from '@material-ui/core/colors'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const Budget = () => {
  const products = useSelector(store => store.products.allProducts)
  const [stock, setStocks] = useState(0)

  useEffect(() => {
    let stocks = 0
    products.map((product) => {
      stocks += product.stock
      return stocks
    }
    )
    setStocks(stocks)
  }, [])

  return (
    <Card
      sx={{ height: '100%' }}
    >
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
              STOCK
            </Typography>
            <Typography
              color='textPrimary'
              variant='h3'
            >{`${stock} productos`}

            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        />
      </CardContent>
    </Card>

  )
}
export default Budget

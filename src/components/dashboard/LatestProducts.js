import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const LatestProducts = () => {
  const products = useSelector(store => store.products.allProducts)
  const all = products?.sort((a, b) => { return b.id - a.id }).slice(0, 5)
  return (

    <Card>
      <CardHeader
        subtitle={`${products.length} en total`}
        title='Últimos productos agregados'
      />
      <Divider />
      <List>
        {all && all.map((product, i) => (
          <ListItem
            divider={i < products.length - 1}
            key={product.id}
          >
            <ListItemAvatar>
              <img
                alt={product.model}
                src={product.img}
                style={{
                  height: 48,
                  width: 48
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.model}
            />
            <NavLink to='app/products/edit/32'>
              <IconButton
                edge='end'
                size='small'
              >
                <MoreVertIcon />
              </IconButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <NavLink to='/app/products'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color='primary'
            endIcon={<ArrowRightIcon />}
            size='small'
            variant='text'
          >
            Ver todos
          </Button>
        </Box>
      </NavLink>
    </Card>
  )
}
export default LatestProducts

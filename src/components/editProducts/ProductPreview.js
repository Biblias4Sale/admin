import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
// import StarIcon from '@material-ui/icons/Star'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: '50vh'
  },
  content: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column'
  }
})

const ProductPreview = ({ product }) => {
  console.log('product', product)
  const classes = useStyles()
  const stars = []

  // for (let i = 0; i < product.rating; i++) {
  //   stars.push(<StarIcon key={i} />)
  // }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.model}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h4' component='h2'>
            {product.brand} {product.model}
          </Typography>
          <Typography variant='h4' component='h2'>
            {'$' + new Intl.NumberFormat('es-ES').format(product.price)}
          </Typography>
          <div style={{
            color: 'orange',
            marginTop: '15px'
          }}
          >
            {stars}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '27px',
            background: 'black',
            height: '35px',
            color: 'white'
          }}
          >
            <ShoppingCartIcon />
            AGREGAR AL CARRITO
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductPreview

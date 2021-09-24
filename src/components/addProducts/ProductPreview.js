import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/styles'
import { useState, useEffect } from 'react'
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

const ProductPreview = ({
  productInfo,
  imageUrl,
  imgPreview,
  setImgPreview
}) => {
  const [localUrl, setLocalUrl] = useState('')
  const [productPreview, setProductPreview] = useState({})
  const classes = useStyles()

  const stars = []

  useEffect(() => {
    if (imageUrl !== '') {
      setLocalUrl(imageUrl[imgPreview])
    }
  }, [imageUrl, imgPreview])

  useEffect(() => {
    console.log(productInfo)
  }, [productInfo])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={localUrl}
          title='product.model'
        />
        <CardContent className={classes.content}>
          {
        (productInfo && productInfo !== undefined)
          ? (
            <Typography gutterBottom variant='h4' component='h2'>
              {productInfo.brand}<br />
              {productInfo.model}
            </Typography>
            )
          : ''
          }
          <Typography variant='h4' component='h2'>
            {'$' + new Intl.NumberFormat('es-ES').format(productInfo.price)}
          </Typography>
          <div style={{
            color: 'orange',
            marginTop: '15px'
          }}
          >
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
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

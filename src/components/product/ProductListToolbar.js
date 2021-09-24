import {
  Box,
  Button
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { removeProducts, getProducts } from '../../redux/actions/products'
import { Link } from 'react-router-dom'
// import ListImporter from '../../Tools/ListImporter'

const ProductListToolbar = ({ eventHandler, setEventHandler, props, allProducts, dispatch }) => {
  const [deleter, setDeleter] = useState([])
  const onClickDelete = () => {
    setDeleter(eventHandler.selectedProducts)
  }

  useEffect(() => {
    if (deleter.length) {
      dispatch(removeProducts(deleter))
      setEventHandler({ ...eventHandler, selectedProducts: [], deleteProductsBtn: false })
      setDeleter([])
    }
    dispatch(getProducts())
  }, [dispatch, deleter])

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
        style={{
          marginTop: '23px'
        }}
      >
        {/* <Button>
          Import
        </Button>
        <Button sx={{ mx: 1 }}>
          Export
        </Button> */}
        <Button
          onClick={onClickDelete}
          color='warning'
          variant='contained'
          disabled={!eventHandler.deleteProductsBtn}
          style={{
            marginRight: '5px'
          }}
        >
          BORRAR
        </Button>
        <Button
          color='primary'
          variant='contained'
          style={{
            marginRight: '5px'
          }}
          disabled={eventHandler.selectedProducts.length !== 1}
          href={`/app/products/edit/${eventHandler.selectedProducts}`}
        >
          EDITAR PRODUCTO
        </Button>
        <Link to='/app/products/add'>
          <Button
            color='primary'
            variant='contained'
          >
            AGREGAR
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
export default ProductListToolbar

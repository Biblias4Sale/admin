import PerfectScrollbar from 'react-perfect-scrollbar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button
} from '@material-ui/core'

import React, { useEffect, useState } from 'react'

const ProductListResults = ({ dispatch, allProducts, eventHandler, setEventHandler, ...rest }) => {
  const [selectedProductIds, setSelectedProductIds] = useState([])
  const [page, setPage] = useState(0)
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(50)


  if (!selectedProductIds.length && selectedProductIds !== eventHandler.selectedProducts) {
    setEventHandler({ ...eventHandler, deleteProductsBtn: false, selectedProducts: selectedProductIds })
  }
  if (selectedProductIds.length && selectedProductIds !== eventHandler.selectedProducts) {
    setEventHandler({ ...eventHandler, deleteProductsBtn: true, selectedProducts: selectedProductIds })
  }
  useEffect(() => {
    if (!eventHandler.deleteProductsBtn) {
      setSelectedProductIds([])
    }
  }, [eventHandler.deleteProductsBtn])

  useEffect(() => {
    setProducts(allProducts
      .sort((a, b) => {
        if (a.brand < b.brand) { return -1 }
        if (a.brand > b.brand) { return 1 }
        return 0
      })
      .filter(products => products.state))
  }, [allProducts])

  const handleSelectAll = (event) => {
    let newSelectedProductId
    if (event.target.checked) {
      newSelectedProductId = products.map((product) => product.id)
    } else {
      newSelectedProductId = []
    }
    setSelectedProductIds(newSelectedProductId)
  }

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProductIds.indexOf(id)
    let newSelectedProductId = []

    if (selectedIndex === -1) {
      newSelectedProductId = newSelectedProductId.concat(selectedProductIds, id)
    } else if (selectedIndex === 0) {
      newSelectedProductId = newSelectedProductId.concat(selectedProductIds.slice(1))
    } else if (selectedIndex === selectedProductIds.length - 1) {
      newSelectedProductId = newSelectedProductId.concat(selectedProductIds.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelectedProductId = newSelectedProductId.concat(
        selectedProductIds.slice(0, selectedIndex),
        selectedProductIds.slice(selectedIndex + 1)
      )
    }
    setSelectedProductIds(newSelectedProductId)
  }

  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  const changeOrder = (e) => {
    if (e.value === 'desc') {
      return e.sort(function (a, b) {
        if (a.name < b.name) {
          return 1
        }
        if (a.name > b.name) {
          return -1
        }
        return 0
      })
    }
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedProductIds.length === products.length}
                    color='primary'
                    indeterminate={
                      selectedProductIds.length > 0 &&
                      selectedProductIds.length < products.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  <Button>
                    Imagen
                  </Button>
                </TableCell>
                <TableCell
                  value='desc'
                  name='brand'
                >
                  <Button>
                    Marca

                  </Button>

                </TableCell>
                <TableCell>
                  <Button
                    onClick={(e) => changeOrder(e)}
                    name='model'
                    value='desc'
                  >
                    Modelo
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={(e) => changeOrder(e)}
                    name='category'
                    value='desc'
                  >
                    Categoria

                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={(e) => changeOrder(e)}
                    name='subcategory'
                    value='desc'
                  >
                    Subcategoria

                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={(e) => changeOrder(e)}
                    name='stock'
                    value='desc'
                  >
                    Stock

                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={(e) => changeOrder(e)}
                    name='price'
                    value='desc'
                  >
                    Precio

                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.slice(page, page + limit).map((product) => (
                <TableRow
                  hover
                  key={product.id}
                  selected={selectedProductIds.indexOf(product.id) !== -1}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={selectedProductIds.indexOf(product.id) !== -1}
                      onChange={(event) => handleSelectOne(event, product.id)}
                      value='true'
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={product.img[0]}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>
                    {product.brand}
                  </TableCell>
                  <TableCell>
                    {product.model}

                  </TableCell>
                  <TableCell>
                    {product.category}
                  </TableCell>
                  <TableCell>
                    {product.subCategory}
                  </TableCell>
                  <TableCell>
                    {product.stock}
                  </TableCell>
                  <TableCell>
                    {product.price}
                  </TableCell>
                  <TableCell />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component='div'
        count={products.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[10]}
      />
    </Card>
  )
}

// ProductListResults.propTypes = {
//   products: PropTypes.array.isRequired
// };

export default ProductListResults

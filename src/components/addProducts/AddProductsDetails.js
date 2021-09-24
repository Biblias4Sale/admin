import React, { useEffect, useState } from 'react'
import { getSubCategoriesOf } from '../../redux/actions/categories'
import { addProducts } from '../../redux/actions/products'
import FileUploader from '../../Tools/FileUploader'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  ImageList,
  ImageListItem
} from '@material-ui/core'

const AddPorductsDetails = ({
  dispatch,
  allCategories,
  subCategoriesOf,
  allBrands,
  productInfo,
  setProductInfo,
  setSelectedFiles,
  selectedFiles,
  imageUrl,
  setImageUrl,
  encodedImgs,
  setEncodedImgs,
  imgPreview,
  setImgPreview
}) => {
  const [localUrl, setLocalUrl] = useState([])
  const [flag, setFlag] = useState(0)
  const [key, setKey] = useState(0)
  useEffect(() => {
    if (imageUrl !== []) {
      setLocalUrl(imageUrl)
    }
  }, [imageUrl])

  useEffect(() => {
    if (flag === 1) {
      setProductInfo({ ...productInfo, img: encodedImgs })
      setFlag(2)
    }
    if (flag === 2 &&
      productInfo.category !== '-' &&
      productInfo.subCategory !== '-' &&
      productInfo.brand !== '-') {
      dispatch(addProducts(productInfo))
      setFlag(3)
    }
    if (flag === 3) {
      setKey(key + 1)
      setProductInfo({
        brand: '',
        model: '',
        category: '',
        subCategory: '',
        price: '',
        discount: '',
        description: '',
        img: []
      })
      setSelectedFiles([])
      setEncodedImgs([])
      setImageUrl([])
      setFlag(0)
    }
    console.log(encodedImgs, ' en details')
  }, [flag, encodedImgs])

  const handleChange = (event) => {
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value
    })
    console.log(productInfo)
  }

  useEffect(() => {
    if (productInfo.category !== '') {
      dispatch(getSubCategoriesOf(productInfo.category))
    }
  }, [dispatch, productInfo.category])

  const submitAddProducts = async (e) => {
    e.preventDefault()
    setFlag(1)
    // dispatch(addProducts(productInfo))
  }

  const catchImgId = (e) => {
    setImgPreview(e.target.id)
  }

  return (
    <>

      <form
        autoComplete='off'
        noValidate
        onSubmit={submitAddProducts}
        key={key}
      >
        <Card>
          <CardHeader
            subheader='Puede visualizar como va a verse su producto en la seccion de productos en la tarjeta que esta a su izquierda, luego de guardar su producto podra volver a editarlo si asi lo desea.'
            title='Agregar nuevo producto'
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Marca'
                  name='brand'
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={productInfo.brand}
                  variant='outlined'
                >
                  <option key='0' value='-'>Sleccione una marca</option>
                  {allBrands && allBrands.sort().map((brand) => (
                    <option
                      key={brand.id}
                      value={brand.name}
                    >
                      {brand.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  helperText=''
                  label='Modelo'
                  name='model'
                  onChange={handleChange}
                  required
                  value={productInfo.model}
                  variant='outlined'
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Categoria'
                  name='category'
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={productInfo.category}
                  variant='outlined'
                >
                  <option key='0' value='-'>Sleccione una categoria</option>
                  {allCategories && allCategories.sort().map((category, index) => (
                    <option
                      key={index}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Subcategoria'
                  name='subCategory'
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={productInfo.subCategory}
                  variant='outlined'
                >
                  <option key='0' value='-'>Sleccione una categoria</option>
                  {subCategoriesOf && subCategoriesOf.sort().map((subCat, index) => (
                    <option
                      key={index}
                      value={subCat}
                    >
                      {subCat}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Precio'
                  name='price'
                  onChange={handleChange}
                  required
                  value={productInfo.price}
                  variant='outlined'
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Stock'
                  name='stock'
                  onChange={handleChange}
                  required
                  value={productInfo.stock}
                  variant='outlined'
                />
              </Grid>

              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Descripcion del producto'
                  name='description'
                  onChange={handleChange}
                  required
                  multiline
                  value={productInfo.description}
                  variant='outlined'

                />
              </Grid>

              <Grid
                item
                md={12}
                xs={12}
              >
                <Box>
                  <ImageList
                    style={{
                      display: 'flex',
                      flexWrap: 'no-wrap',
                      flexDirection: 'row',
                      overflowX: 'scroll'
                    }}
                  >

                    {(localUrl && localUrl)
                      ? (localUrl.map((local, index) => (
                        <ImageListItem>
                          <img
                            style={{
                            width: '100px',
                            height: '100px'
                          }}
                            src={local}
                            onClick={(e) => catchImgId(e)}
                            id={index}
                          />
                        </ImageListItem>

                        )))

                      : (
                        <ImageListItem>
                          <img style={{ width: '100px', height: '100px' }} src={imageUrl} />
                        </ImageListItem>
                        )}

                  </ImageList>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              p: 2
            }}
          >
            <FileUploader
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              encodedImgs={encodedImgs}
              setEncodedImgs={setEncodedImgs}
            />
            <Button
              color='primary'
              variant='contained'
              type='submit'
            >
              Guardar producto
            </Button>
          </Box>
        </Card>
      </form>
    </>
  )
}

export default AddPorductsDetails

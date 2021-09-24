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
import FormHelperText from '@material-ui/core/FormHelperText'
import { validate } from './formValidate.js'

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
  const [errors, setErrors] = useState({})

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
      (productInfo.category !== '-') &&
      productInfo.subCategory !== '-' &&
      productInfo.brand !== '-' &&
      productInfo.model !== '' &&
      productInfo.price !== '' &&
      productInfo.description !== '' &&
      productInfo.img.length !== 0 &&
      productInfo.stock !== ''
    ) {
      setErrors(null)
      dispatch(addProducts(productInfo))
      setFlag(3)
    } else {
      if (productInfo.img.length === 0) setErrors((prev) => ({ ...prev, img: 'Por favor carga una imagen' }))
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
  }, [flag, encodedImgs])
  const handleChange = (event) => {
    validate(event.target.value, event.target.name, setErrors)

    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value
    })
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
                  <option key='0' value='-'>Seleccione una marca</option>
                  {allBrands && allBrands.sort().map((brand) => (
                    <option
                      key={brand.id}
                      value={brand.name}
                    >
                      {brand.name}
                    </option>
                  ))}
                </TextField>

                {errors.brand
                  ? <FormHelperText style={{ color: 'red' }}> {errors.brand} </FormHelperText>
                  : null}

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

                {errors.model
                  ? <FormHelperText style={{ color: 'red' }}> {errors.model} </FormHelperText>
                  : null}

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
                  <option key='0' value='-'>Seleccione una categoria</option>
                  {allCategories && allCategories.sort().map((category, index) => (
                    <option
                      key={index}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </TextField>
                {errors.category
                  ? <FormHelperText style={{ color: 'red' }}> {errors.category} </FormHelperText>
                  : null}

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
                  <option key='0' value='-'>Seleccione una Subcategoria</option>
                  {subCategoriesOf && subCategoriesOf.sort().map((subCat, index) => (
                    <option
                      key={index}
                      value={subCat}
                    >
                      {subCat}
                    </option>
                  ))}
                </TextField>

                {errors.subCategory
                  ? <FormHelperText style={{ color: 'red' }}> {errors.subCategory} </FormHelperText>
                  : null}

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
                  // InputProps={{ inputProps: { min: 0, max: 1000000 } }}
                  // type='number'
                  onChange={handleChange}
                  required
                  value={productInfo.price}
                  variant='outlined'
                />

                {errors.price
                  ? <FormHelperText style={{ color: 'red' }}> {errors.price} </FormHelperText>
                  : null}

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
                {errors.stock
                  ? <FormHelperText style={{ color: 'red' }}> {errors.stock} </FormHelperText>
                  : null}

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
                {errors.description
                  ? <FormHelperText style={{ color: 'red' }}> {errors.description} </FormHelperText>
                  : null}
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
                        <ImageListItem key={index}>
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
            {!errors.brand && !errors.model && !errors.price && !errors.description && !errors.stock && !errors.category && !errors.subCategory && productInfo.brand && productInfo.model && productInfo.price && productInfo.description && productInfo.stock && productInfo.category && productInfo.subCategory
              ? (
                <Button
                  color='primary'
                  variant='contained'
                  type='submit'
                >
                  Guardar producto
                </Button>
                )
              : (
                <Button
                  color='primary'
                  variant='contained'
                  disabled
                >
                  Guardar producto
                </Button>
                )}
          </Box>
        </Card>
      </form>
    </>
  )
}

export default AddPorductsDetails

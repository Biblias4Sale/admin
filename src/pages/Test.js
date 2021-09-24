import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCategories,
  getSubCategories,
  getSubCategoriesOf,
  addCategory,
  addSubCategory
} from '../redux/actions/categories'
import axios from 'axios'

const Test = () => {
  const pago = async () => {
    const newProduct = {
      id: 458044,
      category_id: '1122',
      currency_id: 'ARS',
      description: 'Alta facha',
      title: 'Una camara Noilan',
      unit_price: 120,
      quantity: 2
    }
    const respose = await axios.post('http://localhost:3002/api/v1/mercadopago', newProduct, { withCredentials: true })
    window.open(respose.data, '_blank')
  }

  return (
    <>
      <button onClick={() => pago()}> josetester </button>
    </>
  )
}
export default Test

// "id": "458044",
//           "category_id": "1122",
//           "currency_id": "ARS",
//           "description": "Alta facha",
//           "title": "Una camara Noilan",
//           "quantity": 5,
//           "unit_price": 95

import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core'
import {ApiURL} from '../../config'
import React, { useState, useEffect } from 'react'
import { getPaymentsData } from '../../redux/actions/payments' 
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
const PaymentList = () => {
  const allPayments = useSelector(store => store.payments.paymentsData)
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  useEffect(async () => {
    dispatch(getPaymentsData())
    let dataArr = allPayments?.map(async (k) => {
      let o = await axios.put(`${ApiURL}/user/${k.userId}`)
      console.log(o.data)
      let userData ={
        name: o.data.name,
        lastName:o.data.lastName,
        email:o.data.email,
        city:o.data.city,
        address:o.data.address,
        cp:o.data.cp,
        cartId:k.cartId,
        status:k.status,
        userId:o.data.id
      }
      return userData
    })
    let newArr = await Promise.all(dataArr)
    setData(newArr)
  }, [dispatch])

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 750 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Cliente
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Direccion
                </TableCell>
                <TableCell>
                  CP
                </TableCell>
                <TableCell>
                  estado de compra
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((d, index) => {
                console.log(d.email)
                return(
              
              <TableRow
                hover
                key={index}
              >
                <TableCell>
                  {d.name} {d.lastName}
                </TableCell>
                <TableCell>
                  {d.email}
                </TableCell>
                <TableCell>
                  {d.address}
                </TableCell>
                <TableCell>
                  {d.cp}
                </TableCell>
                <TableCell>
                  {d.status}
                </TableCell>
                <TableCell style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button key={d.cartId}>guardar</Button>
                </TableCell>
              </TableRow>
              )})}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  )
}

export default PaymentList

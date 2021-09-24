import {
  Box,
  Modal,
  Typography,
  Chip
} from '@material-ui/core'

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4
// }

// export const PaymentModal = ({
//   // open,
//   // handleClose,
//   // paymentByID
// }) => {
  // return (
  //   <div>
  //     {/* {
  //     // paymentByID.length === 0
  //       ? null
  //       : ( */}
  //         <Modal
  //           open={open}
  //           onClose={handleClose}
  //           aria-labelledby='modal-modal-title'
  //           aria-describedby='modal-modal-description'
  //         >
  //           <Box sx={style}>
  //             <Typography id='modal-modal-title' variant='h4' component='h2' style={{ display: 'flex', justifyContent: 'space-around' }}>
  //               {`Nº Ref: ${paymentByID.id}`}
  //               <Chip
  //                 color='primary'
  //                 label={paymentByID.status}
  //                 size='small'
  //                 onClick={() => console.log('Me apretaste')}
  //               />
  //             </Typography>
  //             <Typography id='modal-modal-description' sx={{ mt: 2 }}>
  //               <h4>DATOS DEL COMPRADOR</h4>
  //               <div>
  //                 {`Comprador: ${paymentByID.card.cardholder.name.toUpperCase()}`}
  //               </div>
  //               <div>
  //                 {`${paymentByID.payer.identification.type}: ${paymentByID.payer.identification.number}`}
  //               </div>
  //               <div>
  //                 {`Medio de pago: ${paymentByID.payment_type_id.toUpperCase()} - ${paymentByID.payment_method_id.toUpperCase()}`}
  //               </div>
  //               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //                 <div>
  //                   {`Vto: ${paymentByID.card.expiration_month}/${paymentByID.card.expiration_year.toString().substr(-2)}`}
  //                 </div>
  //                 <div>
  //                   {`Terminada en: ${paymentByID.card.last_four_digits}`}
  //                 </div>
  //               </div>
  //             </Typography>
  //             <Typography id='modal-modal-description' sx={{ mt: 2 }}>
  //               <h4>DATOS DE LA COMPRA</h4>
  //               {paymentByID.additional_info.items.map((product, index) => {
  //                 return (
  //                   <div key={index}>
  //                     <h5> Producto: {product.title} </h5>
  //                     <h5> {`Qtd: ${product.quantity}  -  Subtotal: $ ${product.unit_price * product.quantity}`} </h5>
  //                   </div>
  //                 )
  //               })}
  //               <hr />
  //               <h5> {`TOTAL DE LA COMPRA: $ ${paymentByID.transaction_amount}`} </h5>
  //             </Typography>
  //           </Box>
  //         </Modal>
  //         )
  //       }
  //   </div>
  // )
// }

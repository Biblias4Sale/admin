import 'react-perfect-scrollbar/dist/css/styles.css'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core'
import GlobalStyles from './components/GlobalStyles'
import theme from './theme'
import routes from './routes'
import { FakeContext } from './FakeContext'
import { getCategories, getSubCategories } from './redux/actions/categories'
import { getProducts } from './redux/actions/products'
import { getUsers } from './redux/actions/user'
import { getAllBrands } from './redux/actions/brands'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { getConfigs } from './redux/actions/config'


const App = () => {
  const content = useRoutes(routes)
  const [init, setInit] = useState(true)
  const { dispatch } = FakeContext()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSubCategories())
    dispatch(getProducts())
    dispatch(getUsers())
    dispatch(getAllBrands())
    dispatch(getConfigs())
    setInit(false)
  }, [init])

// const update =() =>{
//   setTimeout(() => {
//     axios.get('http://localhost:3001/products')
//   }, 40000);

  // }
  // update()
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App

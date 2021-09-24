
function validate (value, target, setErrors) {
  if (target === 'category' || target === 'brand' || target === 'subCategory') {
    setErrors((prev) => ({ ...prev, [target]: null }))
    if (value === '-') setErrors((prev) => ({ ...prev, [target]: 'Por favor elige una opción', subCategory: 'Por favor elige una subCategoría' }))
  }

  if (target === 'model') {
    setErrors((prev) => ({ ...prev, model: null }))

    if (!value) {
      setErrors((prev) => ({ ...prev, model: 'Por favor ingresa un modelo' }))
    }
  }
  if (target === 'description') {
    setErrors((prev) => ({ ...prev, description: null }))

    if (!value) {
      setErrors((prev) => ({ ...prev, description: 'Por favor ingresa una descripción' }))
    }
  }

  if (target === 'price') {
    const priceformat = /^[-]?[0-9]+[.]?[0-9]+$/
    setErrors((prev) => ({ ...prev, price: null }))
    if (value === '') {
      setErrors((prev) => ({ ...prev, price: 'Por favor ingresa un precio' }))
    } else if (!value.match(priceformat)) {
      setErrors((prev) => ({ ...prev, price: 'Por favor ingresa un precio válido' }))
    }
  }
  if (target === 'stock') {
    const priceformat = /^[0-9]{1,12}$/
    setErrors((prev) => ({ ...prev, stock: null }))
    if (value === '') {
      setErrors((prev) => ({ ...prev, stock: 'Por indica cantidad en stock' }))
    } else if (!value.match(priceformat)) {
      setErrors((prev) => ({ ...prev, stock: 'Por favor ingresa un precio válido' }))
    }
  }
  setErrors((prev) => ({ ...prev, change: null }))
}

module.exports = { validate }

import { toast } from 'react-toastify'

export function toastCustom (description, state, timeAutoclose, position) {
  const renderData = () => {
    return (
      <div className='container_toast'>
        {
        state === 'error'
          ? (
              null
            // <FaTimesCircle className='icon_toast' />
            )
          : state === 'success'
            ? (
                null
              // <FaCheckCircle className='icon_toast' />
              )
            : (
                null
              // <FaInfoCircle className='icon_toast' />
              )
      }
        <p>{description}</p>
      </div>
    )
  }

  const params = {
    position: position,
    autoClose: timeAutoclose,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    progress: undefined
  }

  state === 'error'
    ? (
        toast.error(renderData(), params)
      )
    : state === 'success'
      ? (
          toast.success(renderData(), params)
        )
      : (
          toast.warning(renderData(), params)
        )
}

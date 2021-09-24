import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import ImgEncoder from 'src/Tools/ImgEncoder'
const FileUploader = ({ selectedFiles, setSelectedFiles, imageUrl, setImageUrl, encodedImgs, setEncodedImgs }) => {
  const resetImages = () => {
    setSelectedFiles([])
    setEncodedImgs([])
    setImageUrl([])
  }
  useEffect(() => {
    console.log(selectedFiles, ' FILE UPLOADER')
    let arr
    if (selectedFiles && selectedFiles !== [] && selectedFiles.length !== 0) {
      arr = Array.from(selectedFiles).map(file => {
        return (URL.createObjectURL(file))
      })
      console.log(arr, ' en map')
      setImageUrl(arr)
    }
    if (selectedFiles && selectedFiles !== [] && selectedFiles.length !== 0) {
      const result = ImgEncoder(selectedFiles)
      setEncodedImgs(result)
      console.log(encodedImgs)
    }
  }, [selectedFiles, ImgEncoder])

  return (
    <>

      <input
        accept='image/*'
        style={{ display: 'none' }}
        id='raised-button-file'
        multiple
        onChange={(e) => setSelectedFiles(e.target.files)}
        type='file'
      />
      <label htmlFor='raised-button-file'>
        <Button
          variant='contained'
          color='primary'
          component='span'
          onClick={resetImages}
        >
          Agregar imagen
        </Button>
      </label>

    </>
  )
}

export default FileUploader

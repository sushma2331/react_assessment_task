import React from 'react'
import { Button } from 'react-bootstrap'

const ShareButtonComponent = (props) => {

    const {style, onClick, className, children} = props

  return (
    <>
        <Button style={style} onClick={onClick} className={className}>{children}</Button>

    </>
  )
}

export default ShareButtonComponent
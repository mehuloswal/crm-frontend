import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export const BreadCrumb = ({pageName}) => {
    return (
        <Breadcrumb>
        <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
        
        <Breadcrumb.Item active>{pageName}</Breadcrumb.Item>
      </Breadcrumb>
    )
}

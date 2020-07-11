import React from 'react'
import { Breadcrumb } from 'react-bootstrap'


export default function BreadcrumbRow(props) {
    return (
        <div className='w-100'>
            <Breadcrumb className='breadcrumb_row w-100'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                {props.children}
                <Breadcrumb.Item active>{props.active}</Breadcrumb.Item>
            </Breadcrumb>
            <style type="text/css">{`
                .breadcrumb_row{
                    font-size: 14px;
                }
                @media (max-width: 767px){
                    font-size: 13px
                }
                @media (max-width: 575px){
                    font-size: 12px
                }
            `}</style>
        </div>
    )
}

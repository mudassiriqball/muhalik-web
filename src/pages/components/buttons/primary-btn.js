import React from 'react'
import { Button } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'

export default function PrimaryBtn(props) {
    return (
        <>
            <Button className='primary_btn'>
                {props.children}
            </Button>
            <style type="text/css">{`
                .primary_btn{
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid  ${GlobalStyleSheet.primry_color};;
                    background: ${GlobalStyleSheet.primry_color};
                    color: ${GlobalStyleSheet.primry_text_color};
                }
                 .primary_btn:hover{
                    background: ${GlobalStyleSheet.primry_hover_color};
                    border: 1px solid  ${GlobalStyleSheet.primry_color};;
                    color: ${GlobalStyleSheet.primry_text_color};
                    background-image: none;
                    box-shadow: none;
                }
                .primary_btn:focus{
                    background: ${GlobalStyleSheet.primry_hover_color};
                    border: 1px solid  ${GlobalStyleSheet.primry_color};;
                    color: ${GlobalStyleSheet.primry_text_color};
                    box-shadow: 0px 1px 3px 1px ${GlobalStyleSheet.primry_hover_color};
                }
                .primary_btn:active{
                     background: ${GlobalStyleSheet.primry_hover_color};
                    border: 1px solid  ${GlobalStyleSheet.primry_color};;
                    color: ${GlobalStyleSheet.primry_text_color};
                    background-image: none;
                    outline: 0;
                    box-shadow: ${GlobalStyleSheet.primry_hover_color};
                }
                
                
            `}</style>
        </>
    )
}

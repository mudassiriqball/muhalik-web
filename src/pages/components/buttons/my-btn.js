import React from 'react'
import { Button } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'

export default function MyButton(props) {
    return (
        <>
            <Button className='primary_btn'
                size={props.size}
                onClick={props.onClick}
                id={props.id}
                disabled={props.disabled}
                block={props.block}
                style={props.style}
            >
                {props.children}
            </Button>
            <style type="text/css">{`
                .primary_btn{
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
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
                    box-shadow: 0px 0px 1px 2px ${GlobalStyleSheet.primry_light_color};
                }
                .primary_btn:active{
                     background: ${GlobalStyleSheet.primry_hover_color};
                    border: 1px solid  ${GlobalStyleSheet.primry_color};;
                    color: ${GlobalStyleSheet.primry_text_color};
                    background-image: none;
                    outline: 0;
                    box-shadow: 0px 0px 1px 2px ${GlobalStyleSheet.primry_light_color};
                }
                
                .primary_btn:disabled{
                    background: ${GlobalStyleSheet.primry_hover_color};
                    border: 1px solid  ${GlobalStyleSheet.primry_color};;
                    color: ${GlobalStyleSheet.primry_text_color};
                    background-image: none;
                    box-shadow: none;
                }
            `}</style>
        </>
    )
}

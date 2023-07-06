import { Textfit } from "react-textfit";
import React from 'react'
import './Screen.css';
export const Screen = ({value}) => {
  return (
    <div>
        <Textfit className="screen" mode="single" max={70}>
        {value}
        </Textfit>
    </div>
  )
}

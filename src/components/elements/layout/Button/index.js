import React from 'react'
import PropTypes from "prop-types";
import styles from './button.module.scss'

const Button=({
    text,
    size,
    varient,
    background,
    color,
    type,
    className,
    rounded,
    ...reset
})=>{
    return(
        <div className={styles.container}>
            <button className={`${className} ${styles[varient]} ${rounded && styles.rounded} ${className[size]}`}
            style={{background:`${background}`,color:`${color}`}} type={type}> {text} </button>
        </div>
    )
}

Button.defaultProps={
    text:'',
    size:'md',
    className:'',
    background:'#334880',
    color:'#000',
    varient:'normal',
    rounded:false,
    type:'button'
}

Button.prototype={
    text:PropTypes.string,
    size:PropTypes.string,
    className:PropTypes.string,
    color:PropTypes.string,
    varient:PropTypes.string,
    rounded:PropTypes.bool,
    type:PropTypes.string,
    reset:PropTypes.any
}

export default Button
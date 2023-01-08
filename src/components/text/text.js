import React from "react";
import './text.css'


const Text = ({children, color}) => {

        return (
        <div className="text" style={{backgroundColor :color}}>
           {children}
        </div>
     
    )
}

Text.defaultProps = {

  color : 'Coral'
}

export default Text
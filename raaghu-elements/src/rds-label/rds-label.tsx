import React from 'react';
import './rds-label.scss';

export interface RdsLabelProps{
    label?: string;
    multiline?: boolean;
    bold?: boolean;
    italic?: boolean;
    size?: string;
}


const RdsLabel = (props: RdsLabelProps) => {



    return(
        <p className={`${!props.multiline?"singleLine":""} ${props.bold ? "bold":""} ${props.italic? "italic":""}`} 
        style={{fontSize:props.size}}
        ><label>{props.label}</label></p>
    );
}

export default RdsLabel;
import React from 'react'

export default function Alert(props) {
    const captalize = (typeName) =>
    {
        let lower=typeName.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
        props.alertDetails && <div className={`alert alert-${props.alertDetails.alertType} alert-dismissible fade show`} role="alert">
            <strong>{captalize(props.alertDetails.alertType)} :</strong> {props.alertDetails.message}
        </div>
  )
}








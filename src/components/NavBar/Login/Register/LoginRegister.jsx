import React from 'react'

export default function LoginRegister({classNameHeader, classNameLogin, classNameRegister}) {
    return (
        <div className={classNameHeader}>
            <a href="#" className={classNameLogin}>Login</a>
            <a href="#" className={classNameRegister}>Register</a>
        </div>
    )
}

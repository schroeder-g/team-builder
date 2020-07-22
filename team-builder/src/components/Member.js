import React from 'react'

export default function Member(props) {
    const {details, key} = props
    

    if (!details){
        return <h2>Fetching your teammate's details...</h2>
    }

    return (
        <div className="member-container">
            <h3> {details.name}</h3>
            <h3>Email: {details.email}</h3>
            <h3>Role:  {details.role}</h3>
        </div>
    )
}

import React from 'react'

export default function Member(props) {
    const {details, id, handleEdit} = props
    

    if (!details){
        return <h2>Fetching your teammate's details...</h2>
    }

    return (
        <div className="member-container" onClick={() => handleEdit(id) }>
            <h3> {details.name}</h3>
            <h3>Email: {details.email}</h3>
            <h3>Role:  {details.role}</h3>
        </div>
    )
}

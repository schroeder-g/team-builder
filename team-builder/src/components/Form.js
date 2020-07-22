import React from 'react'

export default function Form(props) {
    const { update, submit, values } = props
    
    //event handler for edits to form
    const onChange  = (evt) => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    return (
        <form className="form-container" onSubmit={onSubmit}>
            <button  disabled={!values.name || !values.email } >Bigger Button</button>
            <label htmlFor="">Name: 
                <input type="text"
                    name="name"
                    placeholder="Teammember Name"
                    onChange={(e) => {onChange(e)}}
                    value={values.name}
                />
            </label>
            <label htmlFor="">Email: 
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={(e) => {onChange(e)}}
                    />
            </label>
            <label htmlFor="">Role: 
                <select 
                    name="role"

                />
            </label>
        </form>
    )
}

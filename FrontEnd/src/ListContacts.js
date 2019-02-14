import React, { Component } from 'react'

class ListContacts extends Component {
    render() {
        return (
            <ol ClassName='contact-List'>
                {
                    this.props.contacts.map((contact) => (
                        <li key={contact.id}>
                            {contact.name}
                        </li>
                    ))
                }
            </ol>
        )
    }
}

export default ListContacts
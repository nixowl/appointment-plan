import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { createContext } from 'react'
import { Contact, Props } from '@/types'

type ContactsContextType = {
    contacts: Contact[];
    setContacts: Dispatch<SetStateAction<Contact[]>>
}

const defaultContextValue: ContactsContextType = {
    contacts: [],
    setContacts: () => {},
}

const ContactsContext = createContext<ContactsContextType>(defaultContextValue)

export const ContactsProvider = ({ children }: Props) => {
    const [contacts, setContacts] = useState<Contact[]>(() => {
        const localData = localStorage.getItem('contacts')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        console.log('Updating localStorage with contacts:', contacts)
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    return (
        <ContactsContext.Provider value={{ contacts, setContacts }}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContext

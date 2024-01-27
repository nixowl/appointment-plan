import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Contact } from '@/types';

type ContactsProviderProps = {
    children: ReactNode
}

type ContactsContextType = {
    contacts: Contact[];
    addContact: (contact: Contact) => void;
}

const ContactsContext = createContext<ContactsContextType>({
    contacts: [],
    addContact: () => {},
})

const useContacts = () => {
    return useContext(ContactsContext)
}

export const ContactsProvider: React.FC = ({ children }: ContactsProviderProps) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    const addContact = (newContact: Contact) => { 
        setContacts(prevContacts => [...prevContacts, newContact])
    }

    return (
        <ContactsContext.Provider value={{ contacts, addContacts }}>
            {children}
        </ContactsContext.Provider>
    )
}

export default useContacts = () => { useContext(ContactsContext)}
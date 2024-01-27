import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card'
import { Input } from './ui/input'
import { Label } from '@/components/ui/label'
import { ContactCard } from './ContactCard'
// import * as z from 'zod'
import { Contact } from '@/types'
import { useContext, useState } from 'react'
import ContactsContext from './context/ContactsContext'

export const ContactsForm = () => {
    const [givenName, setGivenName] = useState('')
    const [familyName, setFamilyName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const { contacts, setContacts } = useContext(ContactsContext)
    

    // // Contact form validation
    // const formSchema = z.object({
    //     name: z.string().min(1).max(40),
    //     phone: z.string().min(10).max(14),
    //     email: z.string().email(),
    // })

    // const validateFormData = (inputs: unknown) => {
    //     const isValidData = formSchema.parse(inputs)
    //     return isValidData
    // }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!givenName && !familyName && !email && !phone) return;
        console.log('click')
        console.log(contacts)
        const newContact: Contact = {
            givenName: givenName,
            familyName: familyName,
            email: email,
            phone: phone,
        }
        console.log(newContact)

        setContacts([...contacts, newContact])
        console.log(contacts)
    }

    return (
        <>
            <Card className="flex flex-col p-7 border rounded-md max-h-[87vh]">
                <CardHeader>
                    <CardTitle>Contacts</CardTitle>
                    <CardDescription>
                        Add new contacts here. Save to add to list.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <Label htmlFor="given-name">First name</Label>
                            <Input
                                autoComplete="given-name"
                                id="given-name"
                                type="text"
                                placeholder="John"
                                value={givenName}
                                onChange={(e) => setGivenName(e.target.value)}
                            />
                            <Label htmlFor="last-name">Last name</Label>
                            <Input
                                autoComplete="family-name"
                                id="last-name"
                                type="text"
                                placeholder="Doe"
                                value={familyName}
                                onChange={(e) => setFamilyName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                autoComplete='email'
                                id="email"
                                placeholder="johndoe@mail.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="phone">Phone number</Label>
                            <Input
                                autoComplete='tel'
                                id="phone"
                                placeholder="555-555-5555"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <Button variant="default" type="submit">
                            Add contact
                        </Button>
                    </form>
                </CardContent>

                <Separator />
                <CardHeader>
                    <CardTitle>Contacts</CardTitle>
                    <CardDescription>List of contacts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-[30rem] overflow-y-scroll border rounded-md p-6">
                    {contacts.map((contact, index) => (
                        <ContactCard
                            key={index}
                            givenName={contact.givenName}
                            familyName={contact.familyName}
                            email={contact.email}
                            phone={contact.phone}
                        />
                    ))}
                </CardContent>
            </Card>
        </>
    )
}

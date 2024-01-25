import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card'
import { Input } from './ui/input'
import { Label } from '@/components/ui/label'
import { ContactCard } from './ContactCard'
import { createContext, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export const ContactsForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    // Username validation
    const formSchema = z.object({
        name: z.string().min(1).max(40),
        phone: z.string().min(10).max(14),
        email: z.string().email(),
    })

    const validateFormData = (inputs: unknown) => {
        const isValidData = formSchema.parse(inputs)
        return isValidData
    }

    type Contact = {
        name: string
        email: string
        phone: string
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const contact: Contact = {
            name: name,
            email: email,
            phone: phone,
        }
        console.log(contact)
        try {
            const isValidData = validateFormData(contact)
            console.log(isValidData)
        } catch (error) {
            console.log('Error validating data', error)
        }
    }

    return (
        <>
            <Card className="flex flex-col p-4 border-gray-900">
                <CardHeader>
                    <CardTitle>Contacts</CardTitle>
                    <CardDescription>
                        Add new contacts here. Save to add to list.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="johndoe@mail.com"
                            type="email"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">Phone number</Label>
                        <Input
                            id="email"
                            placeholder="555-555-5555"
                            type="tel"
                        />
                    </div>
                </CardContent>

                <CardFooter>
                    <Button variant="default" type="submit">
                        Add contact
                    </Button>
                </CardFooter>
                <Separator />
                <CardHeader>
                    <CardTitle>Contacts</CardTitle>
                    <CardDescription>List of contacts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <ContactCard
                        name="Pedro Duarte"
                        email="email@email.com"
                        phone="0534838843834"
                    />
                </CardContent>
            </Card>
        </>
    )
}

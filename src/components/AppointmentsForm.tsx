import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card'
import CalendarComponent from './CalendarComponent'
import { useContext, useState } from 'react'
import ContactsContext from './context/ContactsContext'
import { useCalendar } from './hooks/useCalendar'
import { Appointment, Contact } from '@/types'
import { ContactCardAppointments } from './ContactCardAppointments'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { AppointmentCard } from './ui/AppointmentCard'

export const AppointmentsForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedContact, setSelectedContact] = useState<Contact>()
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const { contacts } = useContext(ContactsContext)
    const { selected, timeValue } = useCalendar()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!selectedContact || !selected || !timeValue) {
            console.error('Please select a contact, date, and time.')
            return
        }
        const newAppointment: Appointment = {
            title: title,
            description: description,
            contact: selectedContact,
            date: selected,
            time: timeValue
        }
        setAppointments([...appointments, newAppointment])
        console.log(appointments, 'things')
    }
    

    return (
        <Card className="flex flex-col p-7 border rounded-md">
            <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription>
                    Add new appointments here. Save to add to list.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center gap-3"
                >
                    <section className="flex flex-col justify-center gap-4 w-[80%]">
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                id="title"
                                placeholder="Appointment title"
                            />
                        </div>
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                id="description"
                                placeholder="Appointment description"
                            />
                        </div>
                    </section>
                    <div className="flex justify-around gap-4">
                        <div className="flex flex-row flex-wrap justify-items-center bg-red-500 gap-5 max-h-[23.3rem] max-w-[60rem] overflow-y-scroll rounded-md border p-4">
                            {contacts.map((contact) => (
                                <ContactCardAppointments
                                    onClick={() => setSelectedContact(contact)}
                                    key={contact.id}
                                    givenName={contact.givenName}
                                    familyName={contact.familyName}
                                    email={contact.email}
                                    phone={contact.phone}
                                />
                            ))}
                        </div>
                        <CalendarComponent />
                    </div>
                    <Button className="w-1/2" type="submit">
                        Add appointment
                    </Button>
                </form>
            </CardContent>

            <Separator />
            <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                {appointments.map((appointment, index) => (
                    <AppointmentCard key={index} appointment={appointment} />
                ))}
            </CardContent>
        </Card>
    )
}

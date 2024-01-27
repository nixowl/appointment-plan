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
import { Calendar } from '@/components/ui/calendar'
import { useContext, useState } from 'react'
import ContactsContext from './context/ContactsContext'
import { ContactCard } from './ContactCard'
import { Appointment, Contact } from '@/types'

export const AppointmentsForm = () => {

    const [selected, setSelected] = useState<Date>();
    const [timeValue, setTimeValue] = useState<string>('00:00')
    const [selectedContact, setSelectedContact] = useState<Contact | undefined>(undefined)
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const { contacts } = useContext(ContactsContext)

    const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const time = e.target.value
        
         if (!selected) {
             setTimeValue(time)
             return
        }
        
         const [hours, minutes] = time
             .split(':')
            .map((str) => parseInt(str, 10))
        
         const newSelectedDate = new Date(
             selected.getFullYear(),
             selected.getMonth(),
             selected.getDate(),
             hours,
             minutes
         )
         setSelected(newSelectedDate)
         setTimeValue(time)
     }

    const handleDaySelect = (date: Date | undefined) => {
         
         if (!timeValue || !date) {
             setSelected(date)
             return
        }
        
         const [hours, minutes] = timeValue
             .split(':')
             .map((str) => parseInt(str, 10))
         const newDate = new Date(
             date.getFullYear(),
             date.getMonth(),
             date.getDate(),
             hours,
             minutes
         )
         setSelected(newDate)
     }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!selectedContact || !selected) return

        const newAppointment: Appointment = {
            contact: selectedContact,
            date: selected,
            time: timeValue
        }
        setAppointments([...appointments, newAppointment])
    }

    const handleContactSelect = (contact: Contact) => setSelectedContact(contact);

    

    return (
        <Card className="flex flex-col p-7 border rounded-md">
            <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription>
                    Add new appointments here. Save to add to list.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-4 max-h-[30rem] overflow-y-scroll rounded-md border p-4">
                            {contacts.map((contact, index) => (
                                <ContactCard
                                    onClick={() => handleContactSelect(contact)}
                                    key={index}
                                    givenName={contact.givenName}
                                    familyName={contact.familyName}
                                    email={contact.email}
                                    phone={contact.phone}
                                />
                            ))}
                        </div>
                        <div className="">
                            <Calendar
                                mode="single"
                                selected={selected}
                                onSelect={handleDaySelect}
                                className="flex justify-center rounded-md border"
                                footer={
                                    <>
                                        <Input
                                            type="time"
                                            value={timeValue}
                                            onChange={handleTimeChange}
                                        />
                                        <p>
                                            {' '}
                                            Selected date:{' '}
                                            {selected
                                                ? selected.toLocaleString()
                                                : 'none'}
                                        </p>
                                    </>
                                }
                            />
                        </div>
                    </div>
                    <Button>Add appointment</Button>
                </form>
            </CardContent>

            <Separator />
            <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription>List of appointments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
               
            </CardContent>
        </Card>
    )
}

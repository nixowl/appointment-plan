import { createContext, useState, ReactNode } from 'react'

type Contact = {
    name: string
    email: string
    phone: string
}

type Appointment = {
    date: Date
    contact: Contact
    title: string
    description: string
}

type AppointmentsProviderProps = {
    children: ReactNode
}

export const AppointmentsContext = createContext([] as Appointment[])

export const AppointmentsProvider = ({ children }: AppointmentsProviderProps) => {
    const [appointments, setAppointments] = useState<Appointment[]>([])

    const addAppointment = (appointment: Appointment) => {
        setAppointments((prevAppointments) => [
            ...prevAppointments,
            appointment,
        ])
    }


    return (
        <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
            {children}
        </AppointmentsContext.Provider>
    )
}
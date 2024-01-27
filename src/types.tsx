export type Contact = {
    givenName: string
    familyName: string;
    email: string
    phone: string
}

export type Appointment = {
    contact: Contact;
    date: Date | undefined;
    time: string;
}

export type Props = {
    children: React.ReactNode
}
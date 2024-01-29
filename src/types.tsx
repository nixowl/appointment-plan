export type Contact = {
    id?: number;
    givenName: string
    familyName: string;
    email: string
    phone: string
}

export type Appointment = {
    contact: Contact;
    date: Date | undefined;
    time: string;
    title: string;
    description: string;
}

export type Props = {
    children: React.ReactNode
}


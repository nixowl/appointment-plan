export type Contact = {
    givenName: string
    familyName: string;
    email: string
    phone: string
}

export type Appointment = {
    contact: Contact;
    date: string;
    time: string;
}
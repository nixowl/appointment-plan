import { Card } from "./card"
import { Appointment } from "@/types"

type AppointmentProps = {
    appointment: Appointment;
}

export const AppointmentCard: React.FC<AppointmentProps> = ({ appointment }) => {
    const { contact, date, title, description } = appointment
    const capsGivenName = contact.givenName[0].toUpperCase() + contact.givenName.slice(1)
    const capsFamilyName = contact.familyName[0].toUpperCase() + contact.familyName.slice(1)

    return (
        <>
            <Card className="flex flex-col bg-white/40 border border-white/40 rounded-md p-6 pb-3 h-auto">
                <div className="w-full">
                    <h2 className="text-xl font-bold">{title}</h2>{' '}
                </div>
                <p className="w-[90%]">{description}</p>
                <div className="flex gap-2 place-self-end">
                    <p>With {`${capsGivenName} ${capsFamilyName}`}</p>
                    <p>on {date ? date.toLocaleString() : 'No date'}</p>
                </div>
            </Card>
        </>
    )
}
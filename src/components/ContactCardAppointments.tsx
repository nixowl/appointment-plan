import { Contact } from '@/types'

type ContactCardProps = Contact & {
    onClick?: () => void
}

export const ContactCardAppointments = ({
    givenName,
    familyName,
    email,
    phone,
    onClick,
}: ContactCardProps) => {
    const firstInitial = givenName[0]
    const surnameInitial = familyName[0]
    const capsGivenName = givenName[0].toUpperCase() + givenName.slice(1)
    const capsFamilyName = familyName[0].toUpperCase() + familyName.slice(1)
    return (
        <button
            type="button"
            className="flex items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/30 via-neutral-700/30 to-white/10 border border-white/40 rounded-md p-6 h-auto cursor-pointer hover:bg-violet-600/50 active:bg-violet-700 focus:bg-card/50 focus:ring-4 focus:ring-violet-300"
            onClick={onClick}
        >
            <div className="bg-primary rounded-full p-3">
                <p className="text-sm text-secondary">
                    {firstInitial.toUpperCase()}
                    {surnameInitial.toUpperCase()}
                </p>
            </div>
            <div className="flex flex-col p-4 w-full">
                <h2 className="text-lg font-semibold">
                    {capsGivenName} {capsFamilyName}
                </h2>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </button>
    )
}

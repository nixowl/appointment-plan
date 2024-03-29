import { Contact } from "@/types"

type ContactCardProps = Contact & {
    onClick?: () => void;
    id?: string;
}

export const ContactCard = ({ givenName, familyName, email, phone }: ContactCardProps) => {
    const firstInitial = givenName[0]
    const surnameInitial = familyName[0]
    const capsGivenName = givenName[0].toUpperCase() + givenName.slice(1)
    const capsFamilyName = familyName[0].toUpperCase() + familyName.slice(1)
    return (
        <div className="flex flex-1 items-center space-x-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/30 via-neutral-700/30 to-white/10 border border-white/40 rounded-md p-6 h-[7rem]">
            <div className="bg-primary rounded-full p-6">
                <p className="text-3xl text-secondary">
                    {firstInitial.toUpperCase()}
                    {surnameInitial.toUpperCase()}
                </p>
            </div>
            <div className="flex flex-col justify-around p-4 h-full w-full">
                <p className="text-2xl">
                    {capsGivenName} {capsFamilyName}
                </p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

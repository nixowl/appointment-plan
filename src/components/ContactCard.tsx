import { Contact } from "@/types"


export const ContactCard = ({ givenName, familyName, email, phone }: Contact) => {
    const firstInitial = givenName[0]
    const surnameInitial = familyName[0]
    const capsGivenName = givenName[0].toUpperCase() + givenName.slice(1)
    const capsFamilyName = familyName[0].toUpperCase() + familyName.slice(1)
    return (
        <div className="flex flex-1 items-center space-x-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/30 via-neutral-700/30 to-white/10 border-background border-2 p-3 rounded-md h-[9rem]">
            <div className="bg-primary rounded-full p-6">
                <p className="text-3xl text-secondary">{firstInitial.toUpperCase()}
                {surnameInitial.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-around p-4 h-full w-full">
                <p className="text-2xl">{capsGivenName} {capsFamilyName}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

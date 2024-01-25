// Purpose: Component for displaying contact information.
export const ContactCard = ({ name, email, phone }) => {
    const firstInitial = name.split(' ')[0][0].toUpperCase()
    console.log(firstInitial)
    const surnameInitial = name.split(' ')[1][0].toUpperCase()
    console.log(surnameInitial)
    return (
        <div className="flex flex-1 items-center space-x-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/30 via-neutral-700/30 to-white/10 border-background border-2 p-3 rounded-md h-[9rem]">
            <div className="bg-primary rounded-full p-6">
                <p className="text-3xl text-secondary">{firstInitial}
                {surnameInitial}</p>
            </div>
            <div className="flex flex-col justify-around p-4 h-full w-full">
                <p className="text-2xl">{name}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

import { createContext, useState } from 'react'
import { Props } from '@/types'

export const CalendarContext = createContext({
    selected: undefined as Date | undefined,
    setSelected: (date: Date | undefined) => {},
    timeValue: '00:00',
    setTimeValue: (time: string) => {},
})


export const CalendarProvider: React.FC<Props> = ({ children }) => {
    const [selected, setSelected] = useState<Date>()
    const [timeValue, setTimeValue] = useState<string>('00:00')

    return (
        <CalendarContext.Provider
            value={{ selected, setSelected, timeValue, setTimeValue }}
        >
            {children}
        </CalendarContext.Provider>
    )
}

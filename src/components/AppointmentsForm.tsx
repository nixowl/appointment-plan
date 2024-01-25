import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card'
import { Input } from './ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export const AppointmentsForm = () => {

    const [selected, setSelected] = useState<Date>();
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [timeValue, setTimeValue] = useState<string>('00:00')

     const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (
         e
     ) => {
         const time = e.target.value
         if (!selected) {
             setTimeValue(time)
             return
         }
         const [hours, minutes] = time
             .split(':')
             .map((str) => parseInt(str, 10))
         const newSelectedDate = new Date(
             selected.getFullYear(),
             selected.getMonth(),
             selected.getDate(),
             hours,
             minutes
         )
         setSelected(newSelectedDate)
         setTimeValue(time)
     }

     const handleDaySelect = (date: Date | undefined) => {
         if (!timeValue || !date) {
             setSelected(date)
             return
         }
         const [hours, minutes] = timeValue
             .split(':')
             .map((str) => parseInt(str, 10))
         const newDate = new Date(
             date.getFullYear(),
             date.getMonth(),
             date.getDate(),
             hours,
             minutes
         )
         setSelected(newDate)
     }

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
    return (
        <Card className="flex flex-col p-4 border-gray-900">
            <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription>
                    Add new appointments here. Save to add to list.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center gap-4 space-y-2 h-1/2">
                <ScrollArea className="flex-1 h-44 rounded-md border">
                    <div className="flex flex-col gap-2 p-4 h-[80%]">
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        <a href="#" className="text-primary bg-muted-foreground/20 p-2 rounded">dadas</a>
                        
                    </div>
                </ScrollArea>
                <Calendar
                    mode="single"
                    selected={selected}
                    onSelect={handleDaySelect}
                    className="rounded-md border"
                    footer={
                        <>
                            <Input
                                type="time"
                                value={timeValue}
                                onChange={handleTimeChange}
                            />
                            <p>
                                {' '}
                                Selected date:{' '}
                                {selected ? selected.toLocaleString() : 'none'}
                            </p>
                        </>
                    }
                />
            </CardContent>

            <CardFooter>
                <Button>Save changes</Button>
            </CardFooter>
            <Separator />
            <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription>List of appointments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
        </Card>
    )
}

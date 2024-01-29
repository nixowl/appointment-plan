import { Calendar } from '@/components/ui/calendar'
import { Input } from './ui/input'
import { useCalendar } from './hooks/useCalendar';

const CalendarComponent = () => {
    const { selected, setSelected, timeValue, setTimeValue } = useCalendar();

    const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        const time = e.target.value
        if (!selected) {
            setTimeValue(time)
            return
        }
        const [hours, minutes] = time.split(':').map((str) => parseInt(str, 10))
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

    return (
        <Calendar
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
            className=" rounded-md border"
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
    )
}

export default CalendarComponent
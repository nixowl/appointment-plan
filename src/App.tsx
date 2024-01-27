import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from './components/theme-toggle'
import { ContactsForm } from './components/ContactsForm'
import { AppointmentsForm } from './components/AppointmentsForm'


function App() {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <ThemeToggle />
                <div className="flex justify-center h-full">
                    <Tabs defaultValue="contacts" className="w-[60%]">
                        <TabsList className="grid w-full grid-cols-2 bg-primary-foreground/60 ">
                            <TabsTrigger value="contacts">Contacts</TabsTrigger>
                            <TabsTrigger value="appointments">
                                Appointments
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="contacts">
                                <ContactsForm />
                        </TabsContent>
                        <TabsContent value="appointments">
                            <AppointmentsForm />
                        </TabsContent>
                    </Tabs>
                </div>
            </ThemeProvider>
        </>
    )
}
export default App


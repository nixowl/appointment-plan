import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from './components/ui/theme-toggle'
import { ContactsForm } from './components/ContactsForm'
import { AppointmentsForm } from './components/AppointmentsForm'
import { ContactsProvider } from './components/context/ContactsContext'


function App() {
    return (
        <>
            <ContactsProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <ThemeToggle />
                    <div className="flex justify-center h-full">
                        <Tabs defaultValue="contacts" className="w-[90%]">
                            <TabsList className="grid w-full grid-cols-2 bg-primary-foreground/60 border border-white/50 rounded-md ">
                                <TabsTrigger value="contacts">
                                    Contacts
                                </TabsTrigger>
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
            </ContactsProvider>
        </>
    )
}
export default App


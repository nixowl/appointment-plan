import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from './components/ui/theme-toggle'
import { ContactsForm } from './components/ContactsForm'
import { AppointmentsForm } from './components/AppointmentsForm'
import { ContactsProvider } from './components/context/ContactsContext'
import { CalendarProvider } from './components/context/CalendarContext'


function App() {
    return (
        <>
            <ContactsProvider>
                <CalendarProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <ThemeToggle />

                        {/* Screen size indicators */}
                        <div className="fixed bottom-1 left-1 z-50 flex size-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
                            <div className="block sm:hidden">xs</div>
                            <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                                sm
                            </div>
                            <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
                                md
                            </div>
                            <div className="hidden lg:block xl:hidden 2xl:hidden">
                                lg
                            </div>
                            <div className="hidden xl:block 2xl:hidden">xl</div>
                            <div className="hidden 2xl:block">2xl</div>
                        </div>
                        <div className="flex justify-center h-full">
                            <Tabs defaultValue="contacts" className="w-[75%]">
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
                </CalendarProvider>
            </ContactsProvider>
        </>
    )
}
export default App


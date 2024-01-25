import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from './components/theme-toggle'
import { Separator } from '@/components/ui/separator'

function App() {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <ThemeToggle />
                <div className="flex justify-center h-full">
                    <Tabs defaultValue="contacts" className="w-[70%]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="contacts">Contacts</TabsTrigger>
                            <TabsTrigger value="appointments">
                                Appointments
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="contacts">
                            <Card className="flex flex-col p-4 border-gray-900">
                                <CardHeader>
                                    <CardTitle>Contacts</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click
                                        save when you're done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            defaultValue="@peduarte"
                                        />
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Button>Save changes</Button>
                                </CardFooter>
                                <Separator />
                                <CardHeader>
                                    <CardTitle>Contacts</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click
                                        save when you're done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            defaultValue="@peduarte"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="appointments">
                            <Card className="flex flex-col p-4">
                                <CardHeader>
                                    <CardTitle>Contacts</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click
                                        save when you're done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            defaultValue="@peduarte"
                                        />
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Button>Save changes</Button>
                                </CardFooter>
                                <Separator />
                                <CardHeader>
                                    <CardTitle>Contacts</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click
                                        save when you're done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            defaultValue="@peduarte"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </ThemeProvider>
        </>
    )
}
export default App


import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">GLOW GUID</h1>
          <p className="text-muted-foreground mt-2">
            Enter your details below
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}
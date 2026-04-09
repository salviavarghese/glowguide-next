"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema, type FormData } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  async function onSubmit(values: FormData) {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error("Submission failed:", error)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <h3 className="text-lg font-medium text-slate-800 mb-2">
          You are in!
        </h3>
        <p className="text-sm text-slate-500">
          We will send personalised skincare tips to your inbox.
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-600 text-sm">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="rounded-xl border-slate-200 focus:border-blue-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-600 text-sm">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="you@example.com"
                  className="rounded-xl border-slate-200 focus:border-blue-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white rounded-xl mt-2"
        >
          Sign up for free
        </Button>
      </form>
    </Form>
  )
}
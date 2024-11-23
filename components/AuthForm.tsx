"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

// Define your form schema with Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const formItems = [
  { name: "email", description: "Email" },
  { name: "password", description: "Password" },
]

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data) // Handle form submission logic here
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 p-4 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg dark:bg-gray-900 dark:text-white"
      >
        {formItems.map((item) => (
          <FormField key={item.name} control={form.control} name={item.name} render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">{item.description}</FormLabel>
              <FormControl>
                <Input
                  placeholder={item.description}
                  className="text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )} />
        ))}
        <Button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
          Submit
        </Button>
        <p className="text-center text-gray-400 cursor-pointer">Switch to Sign Up</p>
        <p className="text-center text-gray-400 cursor-pointer">Forgot Password?</p>
      </form>
    </Form>
  )
}

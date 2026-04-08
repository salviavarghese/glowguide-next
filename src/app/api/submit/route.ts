import { NextResponse } from "next/server"
import { formSchema } from "@/lib/schema"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const result = formSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.flatten() },
        { status: 400 }
      )
    }

    console.log("Form submission:", result.data)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

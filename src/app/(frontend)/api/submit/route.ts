import { NextResponse } from "next/server"
import { formSchema } from "@/lib/schema"
import { getPayload } from "payload"
import configPromise from "@payload-config"

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

    const payload = await getPayload({ config: configPromise })

    await payload.create({
      collection: "form-submissions",
      data: {
        name: result.data.name,
        email: result.data.email,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Submission error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

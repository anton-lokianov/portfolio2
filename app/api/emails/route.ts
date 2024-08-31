import ThankYouEmail from "@/emails/thankYou";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import ForMeEmail from "@/emails/forMe";

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!myEmail) {
      throw new Error("MY_EMAIL is not set in the environment variables.");
    }

    const { data, error } = await resend.emails.send({
      from: email,
      to: myEmail,
      subject: subject,
      react: ForMeEmail({ name, message, email }),
    });

    if (data) {
      const { data: thankYou, error: thankYouError } = await resend.emails.send(
        {
          from: myEmail,
          to: email,
          subject: "Thank you for reaching out!",
          react: ThankYouEmail({ name, message }),
        }
      );

      if (thankYouError) {
        return NextResponse.json({ error: thankYouError });
      }
    }

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: String(error) });
    }
  }
}

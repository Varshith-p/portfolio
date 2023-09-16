import EmailTemplate from '@/app/EmailTemplate';
import { NextResponse } from 'next/server';
import {Resend} from "resend"
import * as React from 'react';


const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request: Request) {
   
  try {
    const { name, email, message } = await request.json();
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: "varshithpuligadda@gmail.com",
      subject: "Message from Portfolio",
      react: EmailTemplate({ name,email,message }) as React.ReactElement,
    });

    return NextResponse.json({data,message : "Email Sent successfully!"});
  } catch (error) {
    return NextResponse.json({ error });
  }
}
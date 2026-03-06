import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, amount, name, phone, plan } = body;

  if (!email || !amount || !name || !phone || !plan) {
    return NextResponse.json(
      { error: "Missing required payment fields" },
      { status: 400 },
    );
  }

  const reference = `GFX-${plan}-${Date.now()}`;

  const response = await fetch(
    "https://api.paystack.co/transaction/initialize",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100,
        reference,
        callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,

        label: name,

        metadata: {
          custom_fields: [
            {
              display_name: "Student Name",
              variable_name: "student_name",
              value: name,
            },
            {
              display_name: "Phone Number",
              variable_name: "phone_number",
              value: phone,
            },
            {
              display_name: "Mentorship Plan",
              variable_name: "plan",
              value: plan,
            },
          ],
          description: `Grant Forex ${plan} Mentorship`,
        },
      }),
    },
  );

  const data = await response.json();

  return NextResponse.json(data);
}

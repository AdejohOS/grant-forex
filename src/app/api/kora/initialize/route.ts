import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, amount, name, phone, plan } = body;

    if (!email || !amount || !name || !phone || !plan) {
      return NextResponse.json(
        { error: "Missing required payment fields" },
        { status: 400 },
      );
    }
    const reference = `GFX-${Date.now()}-${Math.floor(Math.random() * 100000)}`;

    const response = await fetch(
      "https://api.korapay.com/merchant/api/v1/charges/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.KORA_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reference,
          amount,
          currency: "NGN",

          customer: {
            name,
            email,
          },

          notification_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/kora/webhook`,
          redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,

          metadata: {
            phone,
            plan,
          },
        }),
      },
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Kora init error:", error);
    return NextResponse.json(
      { error: "Payment initialization failed" },
      { status: 500 },
    );
  }
}

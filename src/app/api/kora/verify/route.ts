import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { reference } = body;

  const response = await fetch(
    `https://api.korapay.com/merchant/api/v1/charges/${reference}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.KORA_SECRET_KEY}`,
      },
    },
  );

  const data = await response.json();

  return NextResponse.json(data);
}

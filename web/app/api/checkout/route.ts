import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { SITE_URL } from "@/lib/data/services";

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin") || SITE_URL;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Scope Request / Assessment Deposit",
              description: "Goldmann Development LLC — scope request or assessment deposit",
            },
            unit_amount: 5000, // $50.00 in cents — adjust as needed
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: origin + "/checkout/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: origin + "/checkout/cancel",
      metadata: { type: "scope_request" },
    });
    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

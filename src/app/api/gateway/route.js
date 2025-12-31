'use server'
import Stripe from 'stripe';
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.secret_key);

export async function POST() {
	const session = await stripe.checkout.sessions.create({
		mode: payment,
		payment_method_types: ["card"],
		line_items: [
			{
				price_data: {
					currency: "run",
					product_data: { name: "Sword Fontain" },
					unit_amount: 9900,
				},
				quantity: 1,
			},
		],
		success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
		cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
	});
	return NextResponse.json({ url: session.url });
}
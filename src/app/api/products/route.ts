import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://moralapparel-us.backendless.app/api/data/products");
    if (!response.ok) {
      throw new Error("Gagal mengambil data produk");
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
    }
  }
}

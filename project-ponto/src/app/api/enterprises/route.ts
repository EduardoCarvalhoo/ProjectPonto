import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json();
    const { name, document, address, phone, email, owner_id } = body;

    if (!name || !document || !address || !phone || !email || !owner_id) {
        return NextResponse.json({ error: "Campos incorretos, tente novamente!" }, { status: 400 });
    }

    try {
        const enterprise = await prisma.enterprise.create({
            data: {
                name,
                document,
                address, 
                phone,
                email,
                owner: {
                    connect: { id: owner_id }
                }
            }
        });

        return NextResponse.json(enterprise, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao cadastrar empresa!", details: error }, { status: 422 });
    }
}

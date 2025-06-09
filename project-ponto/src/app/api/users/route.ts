import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, document, email, user_type } = body;

        if (!name || !email || !document || !user_type) {
            return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
        }

        // Validação simples de tipo de usuário
        const validUserTypes = ['OWNER', 'EMPLOYEE'];
        if (!validUserTypes.includes(user_type)) {
            return NextResponse.json({ error: 'Tipo de usuário inválido.' }, { status: 400 });
        }

        // Criação do usuário
    const user = await prisma.user.create({
        data: {
          name,
          email,
          document,
          user_type,
          status: 'ACTIVE'
        }
      });

        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Erro na criação de usuário", details: error }, { status: 422 });
    }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { created_at: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        document: true,
        user_type: true,
        status: true,
        created_at: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar usuários', details: error }, { status: 422 });
  }
}

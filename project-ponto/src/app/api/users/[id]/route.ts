import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const userId = Number(params.id);

  if (isNaN(userId)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao excluir usuário', details: error },
      { status: 422 }
    );
  }
}

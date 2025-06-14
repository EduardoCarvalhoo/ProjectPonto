import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, { params }: { params: Promise<Record<string, string>> }) {
  try {
    const awaitedParams = await params;
    const userId = Number(awaitedParams.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao excluir usuário', details: error },
      { status: 422 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

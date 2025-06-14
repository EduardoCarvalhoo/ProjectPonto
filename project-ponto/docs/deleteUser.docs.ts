/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Exclui um usuário pelo ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser excluído
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *       400:
 *         description: ID inválido
 *       422:
 *         description: Erro ao excluir usuário
 */

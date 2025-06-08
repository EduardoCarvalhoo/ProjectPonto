/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - document
 *               - email
 *               - user_type
 *             properties:
 *               name:
 *                 type: string
 *                 example: João da Silva
 *               document:
 *                 type: string
 *                 example: 12345678900
 *               email:
 *                 type: string
 *                 format: email
 *                 example: joao@email.com
 *               user_type:
 *                 type: string
 *                 enum: [OWNER, EMPLOYEE]
 *                 example: OWNER
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Requisição inválida (campos obrigatórios ou tipo inválido)
 *       422:
 *         description: Erro ao cadastrar usuário no banco de dados
 */

export {};

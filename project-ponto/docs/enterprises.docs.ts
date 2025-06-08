/**
 * @swagger
 * /api/enterprises:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags:
 *       - Empresas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               document:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               owner_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *       400:
 *         description: Erro de validação
 *       422:
 *         description: Erro ao cadastrar
 */
export {};
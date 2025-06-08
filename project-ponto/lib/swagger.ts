import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Meu ponto: API de gerenciamento de ponto digital',
      version: '1.0.0',
    },
  },
  apis: [
  path.join(process.cwd(), 'docs/**/*.ts'), 
  ],
});

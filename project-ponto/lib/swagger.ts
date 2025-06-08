import '../docs/users.docs';
import '../docs/enterprises.docs';
import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Meu ponto: APIs de gerenciamento de ponto digital',
      version: '1.0.0',
    },
  },
  apis: ['./docs/**/*.ts'], 
});

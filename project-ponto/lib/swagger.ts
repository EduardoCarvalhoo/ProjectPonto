import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import fs from 'fs';

const docsPath = path.resolve(process.cwd(), 'docs');
console.log('Verificando docsPath:', docsPath);
console.log('Arquivos:', fs.readdirSync(docsPath));

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Meu ponto: APIs de gerenciamento de ponto digital',
      version: '1.0.0',
    },
  },
  apis: [path.resolve(process.cwd(), 'docs/**/*.ts')], 
});

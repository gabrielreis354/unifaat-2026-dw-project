import fs from 'node:fs/promises';
import path from 'node:path';
import CONSTANTS from '../../bootstrap/config.js';

export default async function EnvironmentController(request, response) {
    /** TF 10 - Codar aqui */

    // SE postgres_host for "localhost", está rodando local
    // SE for qualquer outro valor, está no Docker
    const ambiente = process.env.POSTGRES_HOST === 'localhost' ? 'local' : 'docker';

    const environment = {
        NODE_WEB_PORT: process.env.NODE_WEB_PORT,
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_PORT: process.env.POSTGRES_PORT,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_DB: process.env.POSTGRES_DB,
        AMBIENTE: ambiente
    };

    response.json(environment);
}

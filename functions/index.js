// functions/index.js

const functions = require("firebase-functions");

/**
 * Esta função redireciona para a URL de uma atividade específica.
 * A URL base é configurada via variáveis de ambiente do Firebase,
 * permitindo que ela seja alterada sem precisar modificar o código.
 *
 * Exemplo de uso:
 * https://sua-funcao.cloudfunctions.net/redirectToActivity?id=123
 */
exports.redirectToActivity = functions.https.onRequest((request, response) => {
  // Pega a URL base da configuração de ambiente.
  // (como configurar) => firebase functions:config:set laica.base_url="https://site-da-laica.web.app".
  //use firebase functions:config:get para pegar o valor
  const baseUrl = 'https://laicagalaxia.com.br';

  if (!baseUrl) {
    console.error("A variável de ambiente 'laica.base_url' não está configurada.");
    response.status(500).send("Erro de configuração do servidor.");
    return;
  }

  // Pega o ID da atividade da query string (ex: ?id=123)
  const activityId = request.query.id;

  if (!activityId) {
    // Se não houver ID, redireciona para a página principal de atividades
    console.log(`Redirecionando para a página principal: ${baseUrl}/atividades`);
    response.redirect(`${baseUrl}/atividades`);
    return;
  }

  // Constrói a URL final e redireciona o usuário
  const finalUrl = `${baseUrl}/atividades/${activityId}`;
  console.log(`Redirecionando para a atividade: ${finalUrl}`);

  // Retorna um redirecionamento HTTP 302 (Found)
  response.redirect(302, finalUrl);
});

//URL BASE DO PROJETO : https://redirecttoactivity-5eulgwppoa-uc.a.run.app


/*
===============================================
Gerar os QR Codes
Agora vem a parte fácil. Para cada atividade, você vai gerar um QR code que aponta para a URL da sua função, passando o ID da atividade como um parâmetro.

A estrutura do link é: [URL da sua função] + ?id= + [ID da atividade]

Exemplo prático:

ID da Atividade: 123
URL da Função: https://redirecttoactivity-5eulgwppoa-uc.a.run.app
Link para o QR Code: https://redirecttoactivity-5eulgwppoa-uc.a.run.app?id=123
Use este link final para gerar o QR code em qualquer gerador online. Quando alguém escanear, será levado para a função, que por sua vez o redirecionará para https://site-da-laica.web.app/atividades/123.

===========================================

Atualizando o Domínio (A Mágica Acontece Aqui)
Daqui a duas semanas, quando seu novo domínio https://laicaconexao.com.br estiver no ar, você NÃO precisará gerar novos QR codes. Basta seguir estes dois passos:

Atualize a variável de ambiente no Firebase com o novo domínio. No terminal, execute:

bash
firebase functions:config:set laica.base_url="https://laicaconexao.com.br"
Faça o deploy da função novamente para que ela passe a usar a nova configuração.

bash
firebase deploy --only functions
Pronto! A partir desse momento, todos os QR codes que você já imprimiu e distribuiu passarão a redirecionar automaticamente para o novo domínio.



*/
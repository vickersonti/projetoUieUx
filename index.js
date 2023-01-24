/**
 * JavaScript do aplicativo.
 * Depende de "jQuery" (https://jquery.com/).
 *
 * OBS 1: Este é o aplicativo principal, para que o tema (template) do site
 * opere. Posteriormente, quando necessário, cada página (conteúdo) terá seu
 * próprio JavaScript, assim, somente o JavaScript necessário será carregado.
 *
 * OBS 2: Todas as instruções que iniciam com um cifrão ($) são da biblioteca
 * jQuery, ou seja, não são JavaScript "puro" (vanilla).
 *
 * Para saber mais:
 *   • https://www.w3schools.com/js/
 *   • https://www.w3schools.com/jsref/
 *   • https://www.w3schools.com/jquery/
 **/

/**
 * Executa aplicativo "runApp" quando o documento estiver pronto.
 * Referências:
 *  • https://www.w3schools.com/jquery/jquery_syntax.asp
 **/
 $(document).ready(runApp);

 /**
  * Aplicativo principal do site.
  * Um aplicativo é uma função, um bloco de código que fica armazenado na 
  * memória do dispositivo e será executado quando for "chamado" (invocado)
  * pelo nome.
  * Referências:
  *  • https://www.w3schools.com/js/js_functions.asp
  **/
 function runApp() {
 
     /**
      * As linhas abaixo são somente para testes, para comprovar que o aplicativo 
      * JavaScript está funcionando. Elas foram comentadas e podem ser apagadas.
      **/
     // console.clear(); // Limpa mensagens do console.
     // console.log("Blog IRS"); // Exibe uma mensagem no console do navegador.
 
     /**
      * Monitora o evento 'click' no documento.
      * Se ocorrer um evento 'click' em um elemento <a>...</a>, executa o 
      * aplicativo "routerLink".
      * Referências:
      *  • https://api.jquery.com/on/
      **/
     $(document).on('click', 'a', routerLink);
 }
 
 /**
  * Aplicativo que processa o link (elemento <a>...</a>) que foi clicado.
  * Este aplicativo é necessário porque alguns links do site apontam para 
  * documentos externos em outros sites. Via de regra, esses links "externos" 
  * sempre iniciam com o protocolo "http://" ou "https://". Também precisamos 
  * detectar cliques nas âncoras que apontam para pontos demarcados na mesma 
  * página e que, sempre iniciam com "#". Por exemplo, no rodapé, temos 
  * <a href="#top">...</a> que aponta para o topo da mesma página.
  **/
 function routerLink() {
 
     /**
      * Extrai o valor do atributo "href" do elemento clicado e armazena na 
      * variável "href". Depois, converte o valor de "href" para minúsculas.
      * 
      * OBS: $(this) faz referência especificamente ao elemento que foi clicado.
      * 
      * Referências:
      *  • https://api.jquery.com/attr/
      *  • https://www.w3schools.com/jquery/jquery_syntax.asp
      *  • https://www.w3schools.com/jsref/jsref_tolowercase.asp
      **/
     let href = $(this).attr('href').toLowerCase();
 
     /**
      * Se clicou em um link externo (http://... OU https://...) ou em uma 
      * âncora (#...),devolve o controle da página para o navegador com 
      * "return true" que fará o processamento normal.
      * 
      * OBS: Os carateres '||' (pipe pipe) significam a lógica 'OR' (OU) onde, se 
      * apenas uma das expressões for verdadeira, todas as expressões serão 
      * verdadeiras. Consulte as referências.
      * 
      * Referências:
      *  • https://www.w3schools.com/js/js_if_else.asp
      *  • https://www.w3schools.com/jsref/jsref_substr.asp
      *  • https://www.w3schools.com/js/js_comparisons.asp
      **/
     if (
         href.substr(0, 7) == 'http://' ||
         href.substr(0, 8) == 'https://' ||
         href.substr(0, 1) == '#'
     ) return true;
 
     /**
      * Carrega a página da rota solicitada.
      **/
     loadPage(href);
 
     /**
      * Encerra o processamento do link sem fazer mais nada. 
      * 'return false' bloqueia a ação normal do navegador sobre um link.
      **/
     return false;
 }
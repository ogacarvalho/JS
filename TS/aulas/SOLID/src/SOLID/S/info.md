Princípio Single Responsability:
    Este princípio é baseado na individualização das classes separando-as em pastas definidas a partir da atribuição que cada classe recebe.
    De modo simples, cada classe deve estar coesa em sua função, as classes de mensagens responsáveis por mensagens as classes de produto responsáveis por produto, inicialmente pode aparentar ser confuso para códigos pequenos, mas é altamente escalável, tornando seu código completamente manuseável.

    Contratos ou [interfaces] podem ficar em uma pasta própria, e as entidades que são as classes propriamente ditas dentro da pasta cujo nome é o mesmo, separados por arquivos ou melhor por módulos.

    O main é o arquivo "sujo" no qual realizamos o instânciamento de nossas classes e testamos sua funcionalidade que seguindo os príncipios estará compartimentalizada.

    Recomenda-se que a aplicação dos princípios seja realizada durante a refatoração do código, portanto inicia-se criando um código funcional e termina refatorando-o com base nos princípios SOLID.
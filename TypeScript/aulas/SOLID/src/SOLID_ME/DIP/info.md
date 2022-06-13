
Princípio da Inversão de Dependências [DIP]
    → O abstrato [Alto_nivel] [interfaces] não devem depender dos detalhes [Classes] [Baixo_nivel] e sim o contrário.
    → Detalhes [Classes] devem depender do abstrato [Interfaces].
    → O alto nível não depende do baixo nível, e sim o contrário.
    → Em outras palavras, uma classe não pode depender de outras classes, e sim de abstrações[interfaces] destas classes. 
    → Alto nível: [Classes_abstratas][Interfaces][Types]
    → Baixo nível: [Classes_comuns]
    → Uma abstração de uma classe pode ser um [mock] ou seja, uma nova classe que "finja" ser a classe real.
    → Transformar uma classe em uma interface é simples, basta pegar a classe desejada remover o corpo de seus métodos, transformar seus getters em atributos e depois na classe original adicionar a dependência [implements] à interface recém criada. 


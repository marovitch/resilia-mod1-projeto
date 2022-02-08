const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}

    showTextNode(1)
}

function showTextNode (textNodeIndex){
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn');

            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button);
        }
    })
}


function showOption (option){
    return option.requiredState == null || option.requiredState(state)
}


function selectOption(option){
    const nextTextNodeId = option.nextText

    if(nextTextNodeId <= 0){
        return startGame()
    }

    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}


const textNodes = [
    {
        id: 1,
        text: `Carla, Gabriela e Antônia são musicistas, Carla toca violino, Gabriela toca a tuba e Antônia toca Oboé. Na exta, decidiram sair à noite para assistir uma apresentação de uma orquestra que tocaria obras de Stravinski, na Sala São Paulo. 
        
        A apresentação está indo muito bem até que se ouve um grito altíssimo vindo não se sabe de onde. Os instrumentos param de repente, desafinando, as luzes se apagam. Após alguns segundos que pareceram uma eternidade, as luzes de acendem, revelando para as amigas uma cena horripilante:
        
        No centro do palco um corpo jaz ensanguentado, o pé está amarrado em uma corda presa nas estruturas de iluminação do teto. 
        Elas correm, tentam sair do prédio, mas todas as tentativas são em vão. Com todas as portas para o mundo exterior fechadas e ninguém a vista, as garotas precisam decidir rapidamente o que fazer e como sair dessa.
        
        Quem vai liderar as investigações?
        `,
        options: [
          {
            text: 'Carla',
            nextText: 2
          },
          {
            text: 'Gabriela',
            nextText: 10
          },
          {
            text: 'Antônia',
            nextText: 23
          }
        ]
      },
      {
        id: 2,
        text: `As garotas tomam uma péssima decisão, segundo filmes de terror, e decidem se separar para encontrar pistas. Carla vai primeiramente até o palco para examinar o corpo. O corpo está gelado, o que é estranho pois o sangue parece fresco. 
        
        Será que Carla deve examinar o corpo mais de perto?`,
        options:[
            {
                text:'Já que estamos aqui...',
                nextText: 3
            }
        ]
      },
      {
        id: 3,
        text: `Carla com todo o cuidado e pavor tateia os bolsos do cadáver em busca de alguma pista. Ela encontra uma carteira com documentos. O defunto é Nelson José e ao que tudo indica também é músico, já que junto a carteira Carla também encontrou uma página amassada de uma partitura de “A Sagração da Primera“, de Igor Stravinski. 
        
        O que Carla deve fazer:`,
        options: [
          {
            text: 'Procurar Nelson José no celular',
            nextText: 4
          },
          {
            text: 'Abandonar a investigação, está ficando tudo estranho ',
            nextText: 5
          }
        ]
      },
      {
          id: 4,
          text:`Carla descobre que Nelson José é um maestro famoso, inclusive há alguns meses estava comandando a mesma orquestra que se apresentou hoje. Aparentemente, e segundo a internet, Nelson foi afastado do comando da orquestra por tempo indeterminado. Enquanto pesquisava na internet Carla foi sentindo o calafrio na coluna. Ao se virar para trás, notou um vulto que avançava sobre ela rapidamente. 
          
          Carla corre. Para onde?`,
          options: [
              {
                  text: 'Carla deve se esconder no bar',
                  nextText: 6,
              },
              {
                text: 'Carla deve  se esconder no banheiro ',
                nextText: 5,
            }
          ]
      },
      {
        id: 5,
        text: 'Carla corre. Desesperada, tenta respirar fundo, vai ao banheiro e joga um pouco de água no rosto. Infelizmente Carla não notou o vulto negro quando entrou no banheiro. Carla ainda tentava entender o que estava acontecendo quando o vulto chega por trás, coloca um pano úmido em seu rosto e Carla desmaia.',
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 6,
        text: `Carla chega ao bar e se esconde atrás do balcão, torcendo para que não tenha sido vista. Carla precisa encontrar suas amigas e dar um jeito de ir embora deste lugar. 
        
        Para quem Carla deve ligar?`,
        options: [
          {
            text: 'Gabriela',
            nextText: 7
          },
          {
            text: 'Antonia',
            nextText: 8
          }
        ]
      },
      {
        id: 7,
        text: `Carla consegue falar com Gabriela que estava procurando pistas no mezanino. Conversando, Gabriela conta que entrou uma sala, um almoxarifado, com muitos panfletos da apresentação. Nos panfletos, o nome do Maestro foi editado as pressas, em uma etiqueta mal colada é possível ler o nome do maestro Jairo Menezes por cima de Nelson José. 
        
        O que devem fazer Carla e Gabriela?`,
        options: [
          {
            text: 'Ligar para a polícia',
            nextText: 8
          },
          {
            text: 'Ligar para Antonia ',
            nextText: 9
          }
          
        ]
      },
      {
        id: 8,
        text: 'Carla e Antonia conseguem falar com a polícia. Enquanto aguardam, Gabriela entra em contato e informa que está nos camarins. Rapidamente Carla e Antônia se encontram com Gabriela e a polícia chega. As meninas apresentam o que encontraram para as autoridades. Após alguns dias, as grotas ouvem no jornal a notícia sórdida do assassinato do maestro Nelson José por Jairo Menezes, que tinha dívidas de jogo com o falecido Nelson e não ia conseguir pagar.  ',
        options: [
          {
            text: 'Parabéns! Clique para jogar novamente',
            nextText: -1
          },
          
        ]
      },
      {
        id: 9,
        text: 'Carla e Gabriela ligam para Antonia e descobrem que ela estava escondida no banheiro todo esse tempo. Antônia informa que já ligou para a polícia que está a caminho, mas enquanto aguardam não percebem que o ambiente está sendo envenenado aos poucos pelo ar-condicionado. As três meninas desmaiam e não conseguem ser socorridas. ',
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 10,
        text: `As garotas tomam uma péssima decisão, segundo filmes de terror, e decidem se separar para encontrar pistas. Gabriela vai primeiramente até o mezanino, tentando ficar o máximo possível longe do corpo. No mezanino, Gabriela encontra uma porta um pouco velha.
        
        O que Gabriela deve fazer?`,
        options: [
          {
            text: 'Abrir a porta',
            nextText: 11
          },
          {
            text: 'Abandonar a investigação e procurar as amigas',
            nextText: 12
          }
        ]
      },
      {
        id: 11,
        text: `Gabriela com todo o cuidado e tentando fazer o mínimo de barulho possível abre a porta e entra na sala. É um almoxarifado, um depósito, com muitos papéis, panfletos e armários. Gabriela começa a abrir gavetas e procurar qualquer tipo de pista. Nisso, encontra uma caixa, escondida no fundo da sala.
        
        O que Gabriela deve fazer?`,
        options: [
          {
            text: 'Abrir a caixa',
            nextText: 13
          },
          {
            text: 'Voltar às gavetas',
            nextText: 14
          }
        ]
      },
      {
        id: 12,
        text: `Gabriela está tendo calafrios com o silêncio e corre para procurar as amigas. Gabriela, desesperada, tenta respirar fundo, vai ao banheiro e joga um pouco de água no rosto. Infelizmente Gabriela não notou o vulto negro quando entrou no banheiro. Gabriela ainda tentava entender o que estava acontecendo quando o vulto chega por trás, coloca um pano úmido em seu rosto e Gabriela desmaia.`,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 13,
        text: `Gabriela abre a caixa e encontra diversos panfletos da mesma apresentação que viram hoje, porém, nota que no panfleto o nome do maestro está editado. Um adesivo com outro nome foi colocado em cima. No adesivo, é possível ler “Jairo Menezes”. Gabriela com cuidado tira o adesivo para ver o que está escrito embaixo e lê “Nelson José”.
        
        O que Gabriela deve fazer?`,
        options: [
          {
            text: 'Procurar “Nelson José” no celular',
            nextText: 15
          },
          {
            text: 'Abandonar a investigação, está ficando tudo estranho',
            nextText: 16
          }
        ]
      },
      {
        id: 14,
        text: `Gabriela volta às gavetas para tentar encontrar alguma pista. Infelizmente, Gabriela não percebe que está sendo observada, e antes de conseguir ter qualquer reação, um pano úmido é colocado em sua boca e ela desmaia.`,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 15,
        text: `Gabriela descobre que Nelson José é um maestro famoso, inclusive há alguns meses estava comandando a mesma orquestra que se apresentou hoje. Aparentemente, e segundo a internet, Nelson foi afastado do comando da orquestra por tempo indeterminado. Enquanto pesquisava na internet Gabriela foi sentindo o calafrio na coluna. Ao se virar para trás, notou um vulto que avançava sobre ela rapidamente. Gabriela corre. 
        
        Para onde?`,
        options: [
          {
            text: 'Gabriela deve se esconder no bar',
            nextText: 17
          },
          {
            text: 'Gabriela deve se esconder no banheiro ',
            nextText: 18
          }
        ]
      },
      {
        id: 16,
        text: `Gabriela, assustada, tenta respirar fundo, vai ao banheiro e joga um pouco de água no rosto antes de procurar as amigas. Infelizmente Gabriela não notou o vulto negro quando entrou no banheiro. Gabriela ainda tentava entender o que estava acontecendo quando o vulto chega por trás, coloca um pano úmido em seu rosto e Gabriela desmaia.`,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 17,
        text: `Gabriela chega ao bar e se esconde atrás do balcão, torcendo para que não tenha sido vista. Gabriela precisa encontrar suas amigas e dar um jeito de ir embora deste lugar. 
        
        Para quem Gabriela deve ligar?`,
        options: [
          {
            text: 'Carla',
            nextText: 19
          },
          {
            text: 'Antônia',
            nextText: 20
          },
          
        ]
      },
      {
        id: 18,
        text: `Gabriela, desesperada, corre até o banheiro, tenta se acalmar e joga um pouco de água no rosto. Infelizmente Gabriela não notou o vulto negro quando entrou no banheiro. Gabriela ainda tentava entender o que estava acontecendo quando o vulto chega por trás, coloca um pano úmido em seu rosto e Gabriela desmaia. `,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 19,
        text: `Gabriela consegue falar com Carla, que estava procurando pistas perto do palco. Gabriela combina de encontrar Carla no banheiro, pois não tem interesse nenhum em chegar perto do corpo. No banheiro, conversam sobre o que encontraram e decidem ligar para a polícia. Infelizmente, as garotas não perceberam que o ambiente estava sendo envenenado aos poucos por meio do ar-condicionado. As duas desmaiam e não conseguem ser resgatadas.`,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 20,
        text: `Gabriela consegue falar com Antônia que estava procurando pistas no escritório da administração. Conversando, Gabriela conta que encontrou muitos panfletos editados no almoxarifado, e Antônia menciona que, no escritório, encontrou diversas fotos de maestros que passaram pela casa, no verso de uma das fotos, leu “Jairo e Nelson”.
        
        O que Gabriela e Antônia devem fazer?`,
        options: [
          {
            text: 'Ligar para a polícia',
            nextText: 21
          },
          {
            text: 'Ligar para Carla',
            nextText: 22
          }
        ]
      },
      {
        id: 21,
        text: `Gabriela e Antônia conseguem falar com a polícia. Enquanto aguardam, Carla entra em contato e informa que está nos próxima ao palco. Rapidamente Gabriela e Antônia se encontram com Carla e a polícia chega. Gabriela e Antônia apresentam o que encontraram para as autoridades. Após alguns dias, as garotas ouvem no jornal a notícia sórdida do assassinato do maestro Nelson José por Jairo Menezes, que tinha dívidas de jogo com o falecido Nelson e não ia conseguir pagar.`,
        options: [
          {
            text: 'Parabéns! Clique para jogar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 22,
        text: `Gabriela e Antonia ligam para Carla e descobrem que ela estava escondida próxima ao palco todo esse tempo. Gabriela informa que já ligou para a polícia que está a caminho, mas enquanto aguardam não percebem que o ambiente está sendo envenenado aos poucos pelo ar-condicionado. As três meninas desmaiam e não conseguem ser socorridas. `,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 23,
        text: `As garotas tomam uma péssima decisão, segundo filmes de terror, e decidem se separar para encontrar pistas. Antônia vai primeiramente até o escritório da administração. No escritório, Antônia encontra premiações e muitas fotos jogadas no chão. Parece que quem passou por essa sala saiu às pressas. 
        
        O que Antônia deve fazer?`,
        options: [
          {
            text: 'Analisar as fotos',
            nextText: 24
          },
          {
            text: 'Procurar as amigas',
            nextText: 25
          }
        ]
      }, 
      {
        id: 24,
        text: `Antônia encontra algumas fotos rasgadas, outras pisadas e um pedaço de papel que parece se ligar a uma outra foto que estava por perto. Juntando as duas partes é possível ver dois homens juntos na foto, no verso, ela lê “Jairo e Nelson - 2005”. 

        O que Antônia deve fazer?
        `,
        options: [
          {
            text: 'Procurar por Jairo e Nelson no celular',
            nextText: 26
          },
          {
            text: 'Abandonar a investigação, está tudo muito estranho',
            nextText: 27
          }
        ]
      }, 
      {
        id: 25,
        text: `Antônia está tendo calafrios com o silêncio e corre para procurar as amigas. Antônia, desesperada, tenta respirar fundo, vai ao banheiro e joga um pouco de água no rosto. Infelizmente Antônia não notou o vulto negro quando entrou no banheiro. Antônia ainda tentava entender o que estava acontecendo quando o vulto chega por trás, coloca um pano úmido em seu rosto e Antônia desmaia.`,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 26,
        text: `Antônia procura entender quem seriam as pessoas da foto. Jairo Menezes foi o maestro responsável pela apresentação de hoje, será amigo de Nelson? No Google, Antônia encontra um artigo falando sobre a rápida substituição do maestro Nelson José por Jairo Menezes. Enquanto pesquisava na internet Antônia foi sentindo um calafrio na coluna. Ao se virar para trás, notou um vulto que avançava sobre ela rapidamente. 
        
        Antônia corre. Para onde?`,
        options: [
          {
            text: 'Antônia deve se esconder no bar',
            nextText: 28
          },
          {
            text: 'Antônia deve se esconder no banheiro ',
            nextText: 29
          }
        ]
      },
      {
        id: 27,
        text: `Antônia tenta respirar fundo, vai ao banheiro e joga um pouco de água no rosto. Infelizmente Antônia não notou o vulto negro quando entrou no banheiro. Antônia ainda tentava entender o que estava acontecendo quando o vulto chega por trás, coloca um pano úmido em seu rosto e Antônia desmaia.`,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 28,
        text: `Antônia chega ao bar e se esconde atrás do balcão, torcendo para que não tenha sido vista. Antônia precisa encontrar suas amigas e dar um jeito de ir embora deste lugar. 
        
        Para quem Antônia deve ligar?`,
        options: [
          {
            text: 'Carla',
            nextText: 30
          },
          {
            text: 'Gabriela',
            nextText: 31
          }
        ]
      },
      {
        id: 29,
        text: `Antônia, desesperada, corre até o banheiro, tenta se acalmar e joga um pouco de água no rosto. Infelizmente Antônia não notou o vulto negro quando entrou no banheiro. Antônia ainda tentava entender o que estava acontecendo quando o vulto chega por trás, coloca um pano úmido em seu rosto e Antônia desmaia`,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 30,
        text: `Antônia consegue falar com Carla, que estava procurando pistas perto do palco. Gabriela combina de encontrar Carla no banheiro. No banheiro, conversam sobre o que encontraram e decidem ligar para a polícia. Infelizmente, as garotas não perceberam que o ambiente estava sendo envenenado aos poucos por meio do ar-condicionado. As duas desmaiam e não conseguem ser resgatadas.`,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente ',
            nextText: -1
          }
        ]
      },
      {
        id: 31,
        text: `Conversando, Gabriela conta que entrou numa sala, um almoxarifado, com muitos panfletos da apresentação. Nos panfletos, o nome do Maestro foi editado às pressas, em uma etiqueta mal colada é possível ler o nome do maestro Jairo Menezes por cima de Nelson José. 
        
        O que devem fazer Antônia e Gabriela?`,
        options: [
          {
            text: 'Ligar para a polícia',
            nextText: 32
          },
          {
            text: 'Tentar encontrar Carla',
            nextText: 33
          }
        ]
      },
      {
        id: 32,
        text: `Antônia e Gabriela conseguem falar com a polícia. Enquanto aguardam, Carla entra em contato e informa que está próxima ao palco. Rapidamente Gabriela e Antônia se encontram com Carla e a polícia chega. As meninas apresentam o que encontraram para as autoridades. Após alguns dias, as garotas ouvem no jornal a notícia sórdida do assassinato do maestro Nelson José por Jairo Menezes, que tinha dívidas de jogo com o falecido Nelson e não ia conseguir pagar.`,
        options: [
          {
            text: 'Parabéns! Clique para jogar novamente',
            nextText: -1
          }
        ]
      },
      {
        id: 33,
        text: `Gabriela e Antônia ligam para Carla e descobrem que ela estava escondida próxima ao palco todo esse tempo. Gabriela informa que já ligou para a polícia que está a caminho, mas enquanto aguardam não percebem que o ambiente está sendo envenenado aos poucos pelo ar-condicionado. As três meninas desmaiam e não conseguem ser socorridas. `,
        options: [
          {
            text: 'Eita! Não deu certo. Clique para tentar novamente',
            nextText: -1
          }
        ]
      }


]


startGame();
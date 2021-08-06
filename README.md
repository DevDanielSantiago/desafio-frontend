# DESAFIO DE FRONTEND!

Esse projeto web tem como objetivo criar um sistema web que ajude **Chico** a monitorar os sensores de temperatura e consumo de energia que instalou em sua residência, esses sensores estão dispostos em quatro ambientes de sua residência, sendo eles dois quartos, a sala e a cozinha.

Para essa desafio foram utilizadas as seguintes tecnologias;

* Angular 11.2.4
* Node JS 10.24.1 

Foi utilizado o template **CoreUI** para criar permitir que eu pudesse focar na resolução do problema proposto. 

Foi criado apenas uma tela de Dashboard com os cards para exibição dos valores dos sensores de cada ambiente da residência e um card exibindo qual sensor estava tento maior consumo.

Além dos cards dos sensores foi criado também um chart para exibição do gráfico com o tempo dos sensores mostrando o consumo de energia em um intervalo de 60 segundos.

Para simulação dos resultados foi criado um serviço com vários métodos de temperatura e consumo que retornam Observables emitindo um novo valor aleatório a cada 5 segundos. 

## Execução do Projeto

A execução do projeto é bem simples, sendo necessário estar apenas com as tecnologias mencionadas anteriormente todas instaladas nas sua respectivas versões.

* Para compilação em modo de desenvolvimento é utilizado o comando ***ng serve --open***.
* Para criação da build de produção é necessário utilização do comando ***npm run build***.

Observação: Em caso de criação da build de produção será necessário utilização de um outra biblioteca node instalada globalmente em seu sistema operacional, recomendo utilização da biblioteca ***http-serve***.

Observação 2: Após a execução do projeto não é necessário que o usuário realize nenhuma operação visto que todos os dados atualizam automaticamente.

### Imagens do sistema em funcionamento.

![Cards dos Sensores]()

![Grafico do tempo dos sensores]()
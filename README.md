# LINGUAGEANDO

**LINGUAGEANDO** é um aplicativo educativo desenvolvido com React Native, projetado para ensinar sobre diferentes partes do corpo humano. O aplicativo oferece uma experiência interativa com imagens e textos explicativos, ajudando os usuários a aprender e se familiarizar com o vocabulário relacionado ao corpo humano de maneira divertida e dinâmica.

## Funcionalidades

- Tela inicial com logo e botão de "Acessar".
- Tela de navegação com botões para acessar as sessões de partes do corpo humano.
- Sessões com imagens e textos explicativos de partes específicas do corpo.
- Interface amigável e simples de usar, adaptada para dispositivos móveis.
- Funcionalidade de navegação entre as sessões utilizando `React Navigation`.

## Tecnologias

- **React Native**: Framework utilizado para o desenvolvimento mobile.
- **Expo**: Ferramenta que facilita o desenvolvimento, construção e distribuição do app.
- **React Navigation**: Para navegação entre telas do aplicativo.
- **Expo Image Picker**: Para selecionar imagens diretamente da galeria do dispositivo ou pela câmera.
- **Firebase Authentication**: Para autenticação de usuários (caso implementado).
  
## Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/MarcusStudios/Linguageando.git
    ```
  
2. Navegue até a pasta do projeto:
    ```bash
    cd Linguageando
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o projeto no modo de desenvolvimento:
    ```bash
    npm start
    ```

   Ou, se estiver usando o Expo, pode rodar diretamente:
    ```bash
    expo start
    ```

5. Escaneie o QR code usando o aplicativo **Expo Go** no seu celular para visualizar o aplicativo em seu dispositivo.

## Estrutura do Projeto

- **/assets**: Contém imagens, ícones e outros recursos estáticos.
- **/components**: Componentes reutilizáveis utilizados em várias telas.
- **/screens**: Contém as telas do aplicativo, como tela inicial, tela de navegação e telas de partes do corpo.
- **/navigation**: Arquivos de configuração da navegação entre telas usando `React Navigation`.
- **/firebase**: Arquivos relacionados à configuração do Firebase (caso implementado).
- **app.json**: Configurações principais do projeto, como nome, versão, ícone, etc.

## Contribuindo

Se você quiser contribuir para o desenvolvimento de **LINGUAGEANDO**, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch com sua nova funcionalidade:
    ```bash
    git checkout -b minha-nova-funcionalidade
    ```
3. Faça commit das suas alterações:
    ```bash
    git commit -am 'Adiciona nova funcionalidade'
    ```
4. Envie a branch para o repositório remoto:
    ```bash
    git push origin minha-nova-funcionalidade
    ```
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato com o autor:

- **Nome**: Marcus
- **E-mail**: marcuseduardo846@gmail.com
- **GitHub**: [MarcusStudios](https://github.com/MarcusStudios)

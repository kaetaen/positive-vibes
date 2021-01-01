# Positive Vibes

> _"Seja forte e corajoso"_
> <br>— Josué 1:9

<p><img src="https://media.giphy.com/media/Q8sXvj1tYnNZrH1Kmg/giphy.gif" /><p>

## Descrição 

Positive Vibes é uma API criada para servir conteúdo multimídia obtidas dos sites Jamendo, Pixabay, Pensador e do podcast Acenda sua Luz para o bot no telegram [Clara PeaceMaker](https://t.me/claraPeacemakerBot). Contudo por ser uma API livre, pode ser utilizada para inúmeros propósitos em inúmeras aplicações, portanto deixei este repositório à parte do bot.

## Requisitos

- NodeJS 10 LTS ou superior
- Chave de API do Jamendo
- Chave de API do Pixabay

## Configurações

Renomeie `.env.example` para `.env`, este arquivo se encontra na raiz do projeto.

O arquivo `.env` exige duas váriaveis de ambiente configuradas: 
- `PIXABAY_API_KEY` 
- `JAMENDO_CLIENT_ID`

O Jamendo fornece as músicas e o Pixabay as imagens. As frases do Pensador são obtidas através de raspagem de dados. Os audios do podcast Acenda sua Luz são obtidos por meio do feed RSS.

### Jamendo

Para conseguir uma client_id do Jamendo crie e acesse sua conta de desenvolvedor no site do [Jamendo](https://devportal.jamendo.com/). Crie  uma aplicação no Jamendo DevPortal e copie a client_id da mesma para a variável  de ambiente `JAMENDO_CLIENT_ID`.

### Pixabay 

Crie uma conta no Pixabay e acesse a [documentação](https://pixabay.com/api/docs/) do mesmo. No tópico Search Images você verá sua chave de API logo abaixo.
Copie e cole o valor para a variável de ambiente `PIXABAY_API_KEY`.

## Recursos

### Frases 

> /quotes

Retorna um JSON contento todas as frases.

> /quotes/random

Retorna um JSON contendo uma frase aleatória.

### Músicas

> /songs

Retorna um JSON contendo informações de todas as músicas disponíveis.

> /songs/random

Retorna um arquivo de audio MP3 aleatório.

### Imagens

> /images

Retorna um JSON contendo todas as imagens.

> /images/random

Retorna um arquivo de imagem aleatório.

> /podcasts

Retorna um JSON contendo todos os episódios do podcast Acenda sua Luz.

> /podcasts/random

Retorna um JSON de um episódio aleatório.

## Agradecimentos

Agradecimentos ao Jamendo, Pixabay e o  Pensador. Acessem as páginas deles e dêem os devidos créditos aos criadores dos conteúdos originais. 

- [Pixabay](https://pixabay.com/pt/)
- [Jamendo](https://www.jamendo.com/)
- [O Pensador](https://www.pensador.com/)
- [Podcast Acenda sua Luz](https://open.spotify.com/show/2GFx3Gf0R4KoCaPand0hYQ)

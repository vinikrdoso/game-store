import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games = [
    {
      id: 1,
      title: 'God of War',
      descricao: 'Vivendo como um homem, fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e a uma segunda oportunidade de ser pai. Junto ao seu filho, Atreus, os dois vão se aventurar pelas selvagens florestas nórdicas e lutar para cumprir uma missão profundamente pessoal.',
      price: 50,
      img: "./assets/images/God-of-War.jpg",
      estoque: 2,
      input: 0,
      comprado: 0,
      toArr: false,
    },
    {
      id: 2,
      title: 'Death Stranding',
      descricao: 'Sam Bridges precisa desbravar um mundo completamente transformado pela Death Stranding. Carregando os vestígios desconectados do nosso futuro em suas mãos, ele embarca em uma jornada para reconectar o mundo despedaçado passo a passo.',
      price: 70,
      img: "./assets/images/Death-Stranding.jpg",
      estoque: 1,
      input: 0,
      comprado: 0,
      toArr: false
    },
    {
      id: 3,
      title: 'The Last Of Us 2',
      descricao: 'Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um dos responsáveis, ela se confronta com as repercussões físicas e emocionais devastadoras de suas ações.',
      price: 40,
      img: "./assets/images/The-Last-Of-Us-2.jpg",
      estoque: 2,
      input: 0,
      comprado: 0,
      toArr: false
    },
    {
      id: 4,
      title: 'The Last Guardian',
      descricao: 'Em uma nação mística e incomum, um garoto descobre uma misteriosa criatura, com quem ele forma um vínculo profundo e indestrutível. A dupla improvável deve ter confiança mútua para escapar de ruínas elevadas e traiçoeiras, repletas de perigos desconhecidos. Vivencie a jornada de uma vida nessa história comovente e sentimental de amizade e confiança.',
      price: 60,
      img: "./assets/images/The-Last-Guardian.jpg",
      estoque: 5,
      input: 0,
      comprado: 0,
      toArr: false
    },
    {
      id: 5,
      title: 'Crash Bandicoot',
      descricao: 'Seu marsupial favorito, Crash Bandicoot™, está de volta! Ele está aprimorado, inspirado e preparado para a coleção de jogos da trilogia insana. Agora você pode experimentar Crash Bandicoot como nunca antes. Gire, pule, golpeie e repita conforme você enfrentar as aventuras e os desafios épicos através dos três jogos que deram início a tudo, Crash Bandicoot™, Crash Bandicoot™ 2: Cortex Strikes Back e Crash Bandicoot™: Warped. Reviva todos os seus momentos favoritos de Crash em seu apogeu gráfico totalmente remasterizado e se prepare para colocar um CRASH nos seus golpes!',
      price: 30,
      img: "./assets/images/Crash.jpg",
      estoque: 3,
      input: 0,
      comprado: 0,
      toArr: false
    }
  ];

  constructor(private headerService: HeaderService) { }

  getGame(codigo) {
    return this.games.find(element => element.id == codigo);
  }

  getAllGames(games) {

  }

  addCart(game) {
    if (game.input == 0) {
      alert("Não há produtos selecionados.");
    } else if (game.input > game.estoque) {
      alert(`A quantidade que você selecionou é maior que o estoque disponível. Quantidade disponível: ${game.estoque}`);
    } else {
      alert("Game adicionado ao carrinho!");
      game.estoque -= game.input;
      game.comprado += game.input;
      game.toArr = true;
      this.headerService.emitGameRead(game);
      game.toArr = false;
    }
  }
}

import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

export default function run() {
const game = new Game();
game.start();
}

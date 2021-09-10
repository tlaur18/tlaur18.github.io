import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public playerX = 8;
  public playerEmoji = "🤓";
  public walkableTiles = ["➖", "🌉", "⬆️", "⬇️", "🏁", "🌊", "🕶"];
  public gameWon = false;
  public gameLost = false;
  public tiles: Array<{ index: number, emoji: string }>;

  constructor() {
    let s = ["⛔️", "➖", "🏁", "➖", "🌞", "➖", "➖", "➖", "➖", "➖", "➖", "➖", "⬆️", "➖", "➖", "➖",
      "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "➖", "➖", "➖", "➖", "➖", "🕶", "➖", "⛔️"];
    this.tiles = [];
    for (let i = 0; i < s.length; i++) {
      this.tiles.push({ index: i, emoji: s[i] });
    }
  }

  public left() {
    let newX = this.playerX - 1;
    if (this.walkableTiles.indexOf(this.tiles[newX].emoji) != -1) {
      this.playerX = newX;
      this.check_collision();
    }
  }

  public right() {
    let newX = this.playerX + 1;
    if (this.walkableTiles.indexOf(this.tiles[newX].emoji) != -1) {
      this.playerX = newX;
      this.check_collision();
    }
  }

  public check_collision() {
    if (this.tiles[this.playerX].emoji == '🏁') this.gameWon = true;
    else if (this.tiles[this.playerX].emoji == '🌊') { this.gameLost = true;  this.playerEmoji = "🤕"; }
    else if (this.tiles[this.playerX].emoji == '🕶') { this.playerEmoji = "😎"; this.walkableTiles.push("🌞"); }
  }

  public jump() {
    // Going up
    if (this.tiles[this.playerX].emoji == '⬆️') {
      for (let i = 0; i < this.tiles.length; i++) {
        if (this.tiles[i].emoji == '🌊') this.tiles[i].emoji = '🌉';
        if (this.tiles[i].emoji == '⬆️') this.tiles[i].emoji = '⬇️';
      }
    }
    // Going down
    else if (this.tiles[this.playerX].emoji == '⬇️') {
      for (let i = 0; i < this.tiles.length; i++) {
        if (this.tiles[i].emoji == '🌉') this.tiles[i].emoji = '🌊';
        if (this.tiles[i].emoji == '⬇️') this.tiles[i].emoji = '⬆️';
      }
    }
  }
}


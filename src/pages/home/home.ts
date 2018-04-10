import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertProvider } from '../../providers/alert/alert'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public 	navCtrl: NavController, private alertProvider: AlertProvider) {
	}
	
	items  	=  this.initItems(false)
	player 	=  {is: "", score: 0}
	cpu    	=  {is: "", score: 0}
	moves  	=  0
	canPlay = true
	lines  	=  [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	
	initItems (triggeredByAlertCtrl) {
		this.moves = 0
		let output = [], i = 0
		this.alertProvider.selectSymbol("Choix du symbole à jouer", "Quel symbole préférez vous jouer ?", this)
		while (i < 9) {
		
			output.push({})
			i++
		
		}
		if (triggeredByAlertCtrl) {
		
			this.items = output
		
		} else {
		
			return output
		
		}
	}
	
	selectSymbol(symbol) {
		this.player.is = symbol
		this.cpu.is = symbol === "X" ? "O" : "X"
	}
	
	playSquare(event) {
		if (this.canPlay) {
			if(!this.items[event.target.id].value) {
				
				this.canPlay = false
				this.items[event.target.id].value = this.player.is
				this.runGame(this.player.is)	
			
			}
		}
	}

	hasWon() {	
		for (let i = 0, len = this.lines.length; i < len; i++) {
			const [a, b, c] = this.lines[i];
			if (this.items[a].value && this.items[a].value === this.items[b].value && this.items[a].value === this.items[c].value) {
			return true;
			}
		}
		return false;	
	}

	runGame(playing){
		this.moves++
		
		if (this.hasWon()) {
		
			this.alertProvider.confirmRestart("Fin de partie !", playing, this)
			
			if (playing === this.player.is) {	
				this.canPlay = true
				this.player.score ++
			} else {
				this.cpu.score ++
			}

		} else if (this.moves < 9){
		
			if (playing === this.player.is) this.ai()
		
		} else {
		
			this.items = this.initItems(false)
			if (playing === this.player.is) this.canPlay = true
		
		}
	}

	restart() {
		this.items = this.initItems(false)	
	}

	ai() {		
		var that  = this
		setTimeout( () => {
			let i  
			
			do {
				i = Math.round(Math.random() * that.items.length - 0.51)
			} while(that.items[i].value)

			that.items[i].value = that.cpu.is	
			that.runGame(that.cpu.is)
			that.canPlay = true

		}, 800);		
	}
}

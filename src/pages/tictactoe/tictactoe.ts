import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { AlertProvider } from '../../providers/alert.provider'
import { User } from '../../providers/user'
import { Models } from '../../models/models'

import { InvitationsPage } from '../invitations/invitations'
import { SearchTictactoePlayersPage } from '../search-tictactoe-players/search-tictactoe-players'

@IonicPage()

@Component({
  selector: 'page-tictactoe',
  templateUrl: 'tictactoe.html'
})
export class TictactoePage {
  constructor(
    public 	navCtrl: NavController, 
    public navParams: NavParams, 
	private alertProvider: AlertProvider,
	public user: User,
	private models : Models,
	private db : AngularFireDatabase,
	private modal : ModalController
  ) {

  }
	
	ionViewDidEnter() {

		// dès que l'on ouvre la vue tictactoe, on 'écoute' les changements en base de données : ... 
		const userRef = "users/" + this.user.id

		// ... de la possibilité d'inviter un autre joueur
		this.db.object(userRef+'/ttt_canInvite').valueChanges().subscribe(snapshot => {
			let canInvite = <any>{}
			canInvite = snapshot
			this.user.ttt_canInvite = canInvite
		})

		//  ... des invitations reçues
		this.db.object(userRef+'/ttt_invitationsRecieved').valueChanges().subscribe(snapshot => {
			let ttt_invitationsRecieved = <any>{}
			ttt_invitationsRecieved = snapshot

			this.user.ttt_invitationsRecieved = []
			for (let i in ttt_invitationsRecieved) {
				// on recharge notre tableau d'invitations reçues
				this.user.ttt_invitationsRecieved.push(ttt_invitationsRecieved[i])
			}
		})

		// notre classe User est donc mise à jour à chaque changement de ces 2 valeurs
	}

	ionViewWillLeave() {
		// avant de quitter la vue, on désactive les listeners
		const userRef = "users/" + this.user.id
		this.db.database.ref(userRef+'/ttt_canInvite').off()
		this.db.database.ref(userRef+'/ttt_invitationsRecieved').off()
	}  
 
 	checkForInvitationsRecieved(){
		let data = {invitations: this.user.ttt_invitationsRecieved, uid: this.user.id}
		let modal = this.modal.create(InvitationsPage, data)
		modal.present()
		modal.onDidDismiss(invitationAccepted=>{
			if (invitationAccepted) {
				const game = 'tictactoe/games/'+invitationAccepted.uid
				this.listenGameState(game)
			}
		})
	}

	searchTictactoePlayers(){
		const data = {uid: this.user.id}
		let modal = this.modal.create(SearchTictactoePlayersPage, data)
		modal.present()
		modal.onDidDismiss(player => {
			if (player) {
				this.sendInvitationForNewGame(player)
			}
		})
	}
 
 	 sendInvitationForNewGame(otherPlayer) {
		// on ne peut envoyer qu'une seule invitation à la fois : on vérifie donc que 'ttt_canInvite' est bien à true
		if (this.user.ttt_canInvite) {
			// on crée une nouvelle id unique de partie composée de 12 caratères aléatoires
			this.gameRef = this.models.createRandomKey(12)
			// une fois l'invitation envoyée, on ne peut plus créer de nouvelle partie puisque notre 'gameRef'
			// ne peut prendre qu'une seule valeur à la fois
			const ref = "users/" + otherPlayer + '/ttt_invitationsRecieved'
			// on met à jour le noeud firebase de l'utilisateur qui reçoit l'invitation
			// on lui ajoute dans ses invitations reçus, une nouvelle invitation
			this.db.object(ref).update({
				[this.gameRef] : {
					sender : {
						uid: this.user.id,
						alias: this.user.alias,
					},
					accepted : false,
					id: this.gameRef,
				}
			})
			// on se positionne dans le statut de l'invitation qu'on a envoyée à l'autre joueur
			// dès que ce status passe à 'true', on peut démarer la partie, on retire également ce listener
			this.db.object(ref+'/'+this.gameRef+'/accepted').valueChanges().subscribe(accepted => {     
				if (accepted) {
					this.startVersusGame(otherPlayer)
					this.db.database.ref(ref+'/'+this.gameRef+'/accepted').off()
				}
			})
			
			// Le joueur ne peut plus envoyer de nouvelle invitation tant que celle-ci est en attente
			const userRef = "users/" + this.user.id
			this.db.object(userRef).update({
				ttt_canInvite :  false
			})
		}
	}
	
	startVersusGame(otherPlayer) {
		
		const game   = 'tictactoe/games',
			  player = Math.random() < 0.5 ? this.user.id : otherPlayer
		// on choisi aléatoirement qui pourra commencer à jouer
			  
		// on crée une nouvel objet de partie dans le noeud games du noeud tictactoe dans la firebase
		this.db.object(game).update({
			[this.gameRef] : {
				player1 : this.user.id,
				player2 : otherPlayer,
				state : {
					// par exemple si la première case en haut à gauche est jouée avec une croix, et que la case du milieu est un rond
					// le nouveau currentState sera : "X---O----"
					currentState: "---------",
					// "playing" correspond au joueur qui peut jouer le prochain coup
					playing: player
				}
			}
		})
		
		const gameRef = game+'/'+this.gameRef
		this.listenGameState (gameRef)
	}

	listenGameState (gameRef){
		const gameState = gameRef + '/state'
		// on met un listenner sur l'état d'avancement de la partie
		this.db.object(gameState).valueChanges().subscribe(newState => {
			// dès qu'un nouveau coup est joué, que l'état est donc modifié...
			let newItems = <any>{}
			newItems = newState
			newItems.currentState
			.split('')
			.map((value, index) => this.items[index] = value !== '-' ? {value: value} : "")
			// ... on retranscrit le state en tableau et l'on assigne ces nouvelles valeurs à notre tableau de cases qui est rendu à l'écran
			this.canPlay = newItems.playing === this.user.id ? true : false
			// selon le joueur qui peut jouer le prochain coup, on autorise ou non le joueur à jouer
		})
	}
 
	game = <any>{}
	gameRef = ""
	invitationsRecieved = []
	items  	=  [{},{},{},{},{},{},{},{},{}]
	player 	=  {is: "", score: 0}
	cpu    	=  {is: "", score: 0}
	moves  	=  0
	canPlay =  true
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
	
	initItems () {
		this.moves = 0
		let output = [], i = 0
		while (i < 9) {
		
			output.push({})
			i++
		
		}

		this.items = output
		if ( !this.canPlay ) {
			this.ai()
		}
	}
	
	selectSymbol(symbol) {
		this.player.is = symbol
		this.cpu.is = symbol === "X" ? "O" : "X"
	}
 
	playSquare(event) {
		if (this.canPlay) {
			let items = <any>{}
			items = this.items
			if(!items[event.target.id].value) {
				
				this.canPlay = false
				items[event.target.id].value = this.player.is
				this.items = items
				this.runGame(this.player.is)	
			
			}
		}
	}

	hasWon() {
		let items = <any>{}
		items = this.items	
		for (let i = 0, len = this.lines.length; i < len; i++) {
			const [a, b, c] = this.lines[i];
			if (items[a].value && items[a].value === items[b].value && items[a].value === items[c].value) {
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
				//this.canPlay = true
				this.player.score ++
			} else {
				this.cpu.score ++
			}

		} else if (this.moves < 9){
		
			if (playing === this.player.is) this.ai()
		
		} else {
		
			this.initItems()
			//if (playing === this.player.is) this.canPlay = true
		
		}
	}

	restart() {
		this.initItems()	
	}

	ai() {		
		//var that  = this
		setTimeout( () => {
			let i  
			let items = <any>{}
			items = this.items
			do {
				i = Math.round(Math.random() * items.length - 0.51)
			} while(items[i].value)

			items[i].value = this.cpu.is
			this.items = items
			this.runGame(this.cpu.is)
			this.canPlay = true

		}, 800);	
  	}
}

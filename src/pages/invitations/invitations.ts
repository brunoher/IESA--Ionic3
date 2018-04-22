import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-invitations',
  templateUrl: 'invitations.html',
})
export class InvitationsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public db: AngularFireDatabase,
  ) {
  }

  invitations = this.navParams.get('invitations')
  uid = this.navParams.get('uid')

  goBack() {
    this.viewCtrl.dismiss()
  }

  accept(invitation) {
    const accepted = 'users/'+this.uid+'/ttt_invitationsRecieved/'+invitation.uid
    this.db.object(accepted).update({
         accepted: true
    })
    this.viewCtrl.dismiss(invitation)
  }
}

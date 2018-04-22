import { Injectable } from '@angular/core';

@Injectable()
export class User {
    id?:String;//"id_in_firebase";
    alias?:String;
    email?:String;
    score?:number;
    ttt_invitationsRecieved? = [];
    ttt_canInvite?:Boolean;
    
    constructor() {}

    
    
    
    init(
        id:String, 
        alias:String, 
        email:String,
        ttt_canInvite:Boolean, 
        ttt_invitationsRecieved: [String]
    ) {
        this.id = id
        this.alias = alias
        this.email = email
        this.ttt_canInvite = ttt_canInvite
        this.ttt_invitationsRecieved = ttt_invitationsRecieved
    }
}
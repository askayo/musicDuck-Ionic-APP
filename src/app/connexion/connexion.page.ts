import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';


@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.page.html',
    styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
    //
    // constructor() { }
    //
    // ngOnInit() {
    // }
    //

    constructor(private router: Router, private storage: Storage) {

        // let mesNotes = [
        //     { 'title': 'Une note', 'content': 'son contenu' },
        //     { 'title': 'Une note 2', 'content': 'son contenu 2' },
        //     { 'title': 'Une note 3', 'content': 'son contenu 3' }
        // ];

        // storage.set('notes', mesNotes);

        // console.log(mesNotes);
        //
        // Object.keys(mesNotes).forEach(function(mesNotes, title) {
        //     // key: the name of the object key
        //     // index: the ordinal position of the key within the object
        //     console.log('ça foncitonne ' + title);
        // });


        //
        // storage.get(mesNotes).then((title) => {
        //     console.log(`Les notes ${mesNotes}`);
        // });

    }

    ngOnInit(){
    }

    login(){

        // Sauvegarde de l'état de connexion
        this.storage.set('userAuthenticated', true);

        // Redirection vers la page d'accueil
        this.router.navigate(['/home']);
    }

}


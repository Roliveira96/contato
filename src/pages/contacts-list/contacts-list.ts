import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';


@IonicPage()
@Component({
  selector: 'page-contacts-list',
  templateUrl: 'contacts-list.html',
})

export class ContactsListPage {
  contacts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsProvider: ContactsProvider) {

    this.getContacts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsListPage');
  }

  getContacts() {
    this.contactsProvider.getContacts()
      .then(data => {
        this.contacts = data;
        console.log(this.contacts);
      });
  }

}

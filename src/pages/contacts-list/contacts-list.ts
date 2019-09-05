import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ContactsProvider} from '../../providers/contacts/contacts';


@IonicPage()
@Component({
  selector: 'page-contacts-list',
  templateUrl: 'contacts-list.html',
})


export class ContactsListPage {
  contacts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsProvider: ContactsProvider, private toast: ToastController) {

    this.getContacts();
  }

  ionViewDidLoad() {

    console.log('DidLoad --> Carrega depois de fazer o donwload da pagina e manten');
  }

  ionViewDidEnter() {
    this.getContacts();
    console.log('DidEnter --> Carrega todas as vezes que entrar na page');
  }

  getContacts() {
    this.contactsProvider.getContacts()
      .then(data => {
        this.contacts = data;
        console.log(this.contacts);
      });
  }

  openContact(id: number) {
    this.contactsProvider.getContact(id)
      .then((result: any) => {
        this.navCtrl.push('ContactDetailsPage', {
          contact: result
        });
      })
      .catch((error: any) => {
        this.toast.create({message: error.error}).present();
      });
  }

  doRefresh(refresher) {
    console.log('Atualizando', refresher);
    this.getContacts();
    setTimeout(() => {
      console.log('Sincronizado');
      refresher.complete();
    }, 2000);
  }

  deleteContact(contact: any) {
    this.contactsProvider.destroyContact(contact.id)
      .then((result: any) => {
        this.toast.create({ message: 'Excluído!', duration: 3000 }).present();
        this.getContacts();

      })
      .catch((error: any) => {
        this.toast.create({ message: error.error , duration: 3000 }).present();
      });
  }

}

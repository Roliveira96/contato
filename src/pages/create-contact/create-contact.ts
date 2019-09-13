import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ContactsProvider} from '../../providers/contacts/contacts';
import {HomePage} from "../home/home";
import {ContactsListPage} from "../contacts-list/contacts-list";


@IonicPage()
@Component({
  selector: 'page-create-contact',
  templateUrl: 'create-contact.html',
})
export class CreateContactPage {
  model: Contact;
  emprego = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
              public contactsProvider: ContactsProvider) {
    this.model = new Contact();
    this.model.name = 'Novo contato';
    this.model.birthday = '1990-03-14';
    this.model.employed = this.emprego;
    this.model.salary = '1500';
    this.model.gender = 'male';


  }

  trabalha(){
    console.log("Mudando o valor da variavel ");
    this.emprego = true;
  }
  createContact() {
    var data = {
      'contact': {
        'name': this.model.name,
        'birthday': this.model.birthday,
        'employed': this.model.employed,
        'salary': this.model.salary,
        'gender': this.model.gender,


      }

    };
    console.log("Valor do employer: " + data["employed"]);

    this.contactsProvider.addContact(data)
      .then((result: any) => {
        this.toast.create({message: 'Contato criado com susesso', duration:3000}).present();
        this.navCtrl.push(ContactsListPage);
      })
      .catch((error: any) => {
        this.toast.create({
          message: 'Falha ao criar o contato: ' +
            error.error
        }).present();
        console.log(error);
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateContactPage');
  }

}

export class Contact {
  name: string;
  birthday: string;
  employed: boolean;
  salary: string;
  gender: string;
}

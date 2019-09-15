import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ContactsProvider} from '../../providers/contacts/contacts';
import {HomePage} from "../home/home";
import { Camera, CameraOptions } from '@ionic-native/camera';

import {ContactsListPage} from "../contacts-list/contacts-list";


@IonicPage()
@Component({
  selector: 'page-create-contact',
  templateUrl: 'create-contact.html',
})
export class CreateContactPage {
  model: Contact;
  photo: string = '';
  emprego = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
              private camera: Camera,
              public contactsProvider: ContactsProvider) {
    this.model = new Contact();
    this.model.name = 'Novo contato';
    this.model.birthday = '1990-03-14';
    this.model.employed = this.emprego;
    this.model.salary = '1500';
    this.model.gender = 'male';
    this.model.photo = '';


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
        'photo':this.photo,


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

  takePicture() {
    this.photo = '';
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }

    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }

}

export class Contact {
  name: string;
  birthday: string;
  employed: boolean;
  salary: string;
  gender: string;
  photo: string;
}

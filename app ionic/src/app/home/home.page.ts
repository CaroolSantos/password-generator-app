import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

import { generatePasswordConfig, PasswordService } from '../Services/password.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  passwordForm: FormGroup;

  passwordHistory: any; 

  generatedPassword: string = '';

  constructor(private fb: FormBuilder, 
    private http: HttpClient, 
    private storage: Storage,
    private passwordService: PasswordService) {
    this.passwordForm = this.fb.group({
      length: ['', [Validators.required, Validators.min(6)]],
      includeUppercase: [false],
      includeLowercase: [false],
      includeNumbers: [false],
      includeSpecial: [false]
    });
  }

  ngOnInit() {
    this.storage.create();
    this.loadPasswordHistory();

    console.log(this.passwordForm.get('length'));
  }


  async loadPasswordHistory() {
    this.passwordService.getPasswordHistory()
    .subscribe(response =>{
      console.log('retorno history password', response);

      this.passwordHistory = response;
    })
  }

  generatePassword() {
    var psswrd: generatePasswordConfig ={
      length: this.passwordForm.get('length')?.value,
      includeUppercase: this.passwordForm.get('includeUppercase')?.value,
      includeLowercase: this.passwordForm.get('includeLowercase')?.value,
      includeNumbers: this.passwordForm.get('includeNumbers')?.value,
      includeSpecial: this.passwordForm.get('includeSpecial')?.value

    }

    this.passwordService.generatePassword(psswrd)
      .subscribe(response => {
        console.log('response',  response);
        this.generatedPassword = response.password;
      });
  }


}

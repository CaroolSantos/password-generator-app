import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

import { PasswordService } from '../Services/password.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  passwordForm: FormGroup;

  passwordHistory: string[] = []; 

  length: number = 12;
  includeUpperCase: boolean = false;
  includeLowercase: boolean = false;
  includeNumbers: boolean = false;
  includeSpecialCharacters: boolean = false;
  generatedPassword: string = '';

  constructor(private fb: FormBuilder, 
    private http: HttpClient, 
    private storage: Storage,
    private passwordService: PasswordService) {
    // this.passwordForm = this.fb.group({
    //   length: [8],
    //   includeUppercase: [false],
    //   includeLowercase: [false],
    //   includeNumbers: [false],
    //   includeSpecial: [false]
    // });
  }

  ngOnInit() {
    this.storage.create();
    this.loadPasswordHistory();
  }

  async loadPasswordHistory() {
    this.passwordHistory = (await this.storage.get('passwordHistory')) || [];
  }

  generatePassword() {
    this.passwordService.generatePassword(this.length, this.includeUpperCase, this.includeNumbers, this.includeSpecialCharacters)
      .subscribe(response => {
        this.generatedPassword = response.generatedPassword;
      });
  }

  async savePassword(password: string) {
    this.passwordHistory.push(password);
    await this.storage.set('passwordHistory', this.passwordHistory);
  }
}

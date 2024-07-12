import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  passwordForm: FormGroup;
  generatedPassword: string;
  passwordHistory: string[] = []; 

  constructor(private fb: FormBuilder, 
    private http: HttpClient, 
    private storage: Storage) {
    this.passwordForm = this.fb.group({
      length: [8],
      includeUppercase: [false],
      includeLowercase: [false],
      includeNumbers: [false],
      includeSpecial: [false]
    });
  }

  ngOnInit() {
    this.storage.create();
    this.loadPasswordHistory();
  }

  async loadPasswordHistory() {
    this.passwordHistory = (await this.storage.get('passwordHistory')) || [];
  }

  generatePassword() {
    const formData = this.passwordForm.value;
    this.http.post<{ password: string }>('/api/generate-password', formData).subscribe(response => {
      this.generatedPassword = response.password;
      this.savePassword(response.password);
    });
  }

  async savePassword(password: string) {
    this.passwordHistory.push(password);
    await this.storage.set('passwordHistory', this.passwordHistory);
  }
}

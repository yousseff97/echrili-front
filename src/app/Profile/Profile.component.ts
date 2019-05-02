import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user';
import {routing} from '../app.routing';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Config} from '../shared/Config';

@Component({
  selector: 'app-profile',
  templateUrl: './Profile.component.html',
})
export class ProfileComponent {
  constructor(private http: HttpClient){ }

  private updateInfo(myForm: NgForm){
    const f_name = myForm.value['f_name'];
    const l_name = myForm.value['l_name'];
    const email = myForm.value['email'];
    const intorduce = myForm.value['introduce'];
    const c_password = myForm.value['c_password'];
    const n_password = myForm.value['n_password'];
    const n2_password = myForm.value['n2_password'];
    myForm.resetForm();
    alert('Profile updated!');
  }
}

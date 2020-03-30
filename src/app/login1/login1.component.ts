import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {
  button;
  constructor() { }

  checkInput(input) {
    if (input.value.length > 0) {
      input.className = 'active';
    } else {
      input.className = '';
    }
  };
  
closeForm(){
return	this.button.className = '';
};
  openForm() {
    this.button.className = 'active';
  }
  
  ngOnInit() {
    this.button = document.getElementById('mainButton');
    document.addEventListener("keyup", function(e) {
      if (e.keyCode == 27 || e.keyCode == 13) {
        // this.closeForm();
      }
    });
 }
}

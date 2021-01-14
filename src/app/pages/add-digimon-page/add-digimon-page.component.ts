import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-digimon-page',
  templateUrl: './add-digimon-page.component.html',
  styleUrls: ['./add-digimon-page.component.scss']
})
export class AddDigimonPageComponent implements OnInit {
  addDigimonForm: any;
  constructor(private formBuilder: FormBuilder) { }
  levelList = ['Fresh', 'Rookie', 'Champion', 'Ultimate', 'Mega' ]
  imageUrl;
  ngOnInit(): void {
    this.addDigimonForm = this.formBuilder.group({
      name:['', [Validators.required]],
      level:['', [Validators.required]],
      img:['', [Validators.required]],
    })
  }
    addDigimon(){
      console.log(this.addDigimonForm.value)
    }

    file(file) {​​

      return new Promise((res, rej) => {​​
  
        const reader = new FileReader();
  
        reader.onload = e => res(e.target.result);
  
        reader.onerror = e => rej(e);
  
        reader.readAsDataURL(file);
  
      }​​);
  
    }​​;
  
  
  
    async preview(event) {​​
  
      const file = event.target.files[0];
  
      const url = await this.file(file);
  
      this.imageUrl = url;
  
    }​​
  }



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
  levelList = ['Fresh', 'Rookie' ]

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
  }



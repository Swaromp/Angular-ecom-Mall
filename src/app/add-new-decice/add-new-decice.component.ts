import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-new-decice',
  templateUrl: './add-new-decice.component.html',
  styleUrls: ['./add-new-decice.component.css']
})
export class AddNewDeciceComponent implements OnInit {
  myForm!: FormGroup;
  imageUrl!: string;
  productForm: any;
  value: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      storage1: ['', Validators.required],
      storage2: ['', Validators.required],
      processor: ['', Validators.required],
      camera1: ['', Validators.required],
      camera2: ['', Validators.required],
      Display: ['', Validators.required],
      battery: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.value = JSON.stringify(this.myForm.value);
    localStorage.setItem('add_device',this.value)


  }

  select(value:any){
    // value = JSON.stringify(value);
    // console.log(value);
    console.log("jioiasdjf");

    localStorage.setItem('add_device',JSON.stringify(value))
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
    }
  }

}

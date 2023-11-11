import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})


export class ReactiveComponent {
  title = 'Reactive Forms';

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];


  reactiveForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address:new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode:new FormControl()
    })
  })


  onSubmit() {
    console.log(this.reactiveForm.value);
  }
 

  ngOnInit() {
    this.setDefault();
  }


  setDefault() {
 
    let contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };
 
    this.reactiveForm.setValue(contact);
  }


  setValue() {
 
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
      gender: "male",
      isMarried: true,
      country: "1",
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    };
 
    this.reactiveForm.setValue(contact);
  }


  setAddress() {
 
    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600070",
    };
 
    this.reactiveForm.get("address")!.setValue(address);
 
  };


  setCountry() {
 
    this.reactiveForm.get("country")!.setValue("1");
 
  };


  patchAddress() {
 
    let address: { city: any; street: any} = {
      city: "Bangalore",
      street: "Brigade Road",
      //pincode: "600070",
      //firstname:'saurv'
    };
 
    // hiện tại dùng patchValue()
    // để vá dữ liệu thì bị lỗi
    this.reactiveForm.get("address")!.patchValue(address as any);
    

    /*
      sửa lỗi là dùng "address as any"

      code gốc của nó là:
      this.reactiveForm.get("address").patchValue(address);
    */
  }


  patchName() {
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
    }
 
    this.reactiveForm.patchValue(contact);
 
  }


  reset() {
    this.reactiveForm.reset();
  }


  // reactiveForm = new FormGroup({
  //   firstname: new FormControl('Sachin'),
  //   lastname: new FormControl('Tendulkar'),
  //   email: new FormControl('sachin@gmail.com'),
  //   gender: new FormControl('male'),
  //   isMarried: new FormControl(true),
  //   country: new FormControl('2'),
  //   address:new FormGroup({
  //     city: new FormControl("Mumbai"),
  //     street: new FormControl("Perry Cross Rd"),
  //     pincode:new FormControl("400050")
  //   })
  // })
}


export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
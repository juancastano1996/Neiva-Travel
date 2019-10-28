import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  customers : any = [];
  limit : number = 13;
  start : number = 0; 
  username:string;
  anggota:any;

  constructor(private router:Router,private postPvdr: PostProvider,public toastCtrl: ToastController,private storage:Storage ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.customers = [];
    this.start = 0;
    this.loadCustomer();
    this.storage.get('session_storage').then((res)=>{
      this.anggota=res;
      this.username= this.anggota.username;
    })
  }

  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/ingreso']);
    const toast = await this.toastCtrl.create({
      message: 'Salida exitosa',
      duration: 2000
    });
    toast.present();
  }

  addCustomer(){
    this.router.navigate(['/addcustomer']);
  }

  updateCustomer(id,name,desc){
  	this.router.navigate(['/addcustomer/' + id + '/' + name + '/' + desc]);
  }

  delCustomer(id){

  	let body = {
  			aksi : 'delete',
  			customer_id : id
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }
  showCustomer(id,name,desc){
  	this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc]);
  }

  doRefresh(event){
  	setTimeout(() =>{
  		this.ionViewWillEnter();
  		event.target.complete();
  	}, 500);
  }

  loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadCustomer().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  loadCustomer(){
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
        limit: this.limit,
        start: this.start
      };
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(data => {
        for(let customer of data.result){
          this.customers.push(customer);
        }
        resolve(true);
      });

    });
  }

}

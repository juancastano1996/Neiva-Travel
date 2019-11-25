import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  customers : any = [];
  usuarios : any = [];
  limit : number = 13;
  start : number = 0; 
  username : string;
  email: "";
  anggota : any;

  constructor(private router:Router,private postPvdr: PostProvider, private actRoute: ActivatedRoute, public toastCtrl: ToastController,private storage:Storage ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{ 
      this.email = data.email;
  		console.log(data);
    });
  }

  ionViewWillEnter(){
    this.customers = [];
    this.usuarios=[];
    this.loadUsuarios;
    this.start = 0;
    this.loadCustomer(this.email);
    this.storage.get('session_storage').then((res)=>{
      this.anggota=res;
      this.username= this.anggota.username;
      this.email = this.anggota.email;
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

  addCustomer(email){
    
    async data => {
    this.storage.set('session_storage',data.result);

  }
    email = this.email;
    this.router.navigate(['/addcustomer/' + email ]);
  }

  updateCustomer(id,name,desc,email){
  	this.router.navigate(['/addcustomer/' + id + '/' + name + '/' + desc + '/' + email]);
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
  	this.loadCustomer(this.email).then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  loadCustomer(email){
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata2',
        limit: this.limit,
        start: this.start,
        email: this.email
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
 
  loadUsuarios(){
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
      };
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(data => {
        for(let usuario of data.result){
          this.usuarios.push(usuario);
        }
        resolve(true);
      });

    });
  }
}

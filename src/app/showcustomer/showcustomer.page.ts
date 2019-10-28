import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.page.html',
  styleUrls: ['./showcustomer.page.scss'],
})
export class ShowcustomerPage implements OnInit {
  name_customer: string ;
  desc_customer: string ;
  id : number;

  constructor(private router:Router,private postPvdr: PostProvider, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.id = data.id;
      this.name_customer = data.name;
      this.desc_customer = data.desc;
    });
  }

}

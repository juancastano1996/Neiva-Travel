import { Component, OnInit, Input, ViewChild, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})

export class ExpandableComponent implements AfterViewInit {
  
  @ViewChild("expandWrapper", { read: ElementRef }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";

  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }

  ngOnInit() {}
  

}

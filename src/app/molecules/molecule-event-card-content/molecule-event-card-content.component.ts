import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { Event } from '../../models/events.model'
@Component({
  selector: 'molecule-event-card-content',
  templateUrl: 'molecule-event-card-content.component.html',
  styleUrls: ['molecule-event-card-content.component.scss']
})

export class MoleculeEventCardContentComponent implements AfterViewInit {

  @ViewChild("expandWrapper", { read: ElementRef }) expandWrapper: ElementRef;
  @Input() expanded: boolean = false;
  @Input() event: Event;
  @Input("expandHeight") expandHeight: string = "500px";

  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }
}
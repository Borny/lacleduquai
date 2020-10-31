import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'copy-to-clipboard-molecule',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss']
})
export class CopyToClipBoardMolecule {
  @Input() list: string[];

  @Output() copySuccessMessage: EventEmitter<void> = new EventEmitter();

  public onCopyToClipBoard(): void{
    this.copySuccessMessage.emit();
  }

}
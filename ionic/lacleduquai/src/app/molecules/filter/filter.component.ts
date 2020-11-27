import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'filter-molecule',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterMolecule implements OnChanges {
  @ViewChild('matSelect') matSelect: MatSelect;

  @Output() selectedFilterOption: EventEmitter<string> = new EventEmitter<string>();

  @Input() select: any;
  @Input() selectLabel: string;
  @Input() filterOptions: string[];

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // if (!changes.isFirstChange) {
    if (this.matSelect && this.select === null) {
      this.matSelect.value = this.select;
    }
  }

  public onSelectedOption(value: string): void {
    this.select = value;
    this.selectedFilterOption.emit(value);
  }
}
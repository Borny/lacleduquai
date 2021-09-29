import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatSelect } from "@angular/material/select";

@Component({
  selector: "filter-molecule",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterMolecule implements OnChanges {
  @ViewChild("matSelect") matSelect: MatSelect;

  @Output() selectedFilterOption: EventEmitter<any> = new EventEmitter<any>();

  @Input() select: any;
  @Input() selectLabel: string;
  @Input() filterOptions: string[];
  @Input() isAllEnable: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.matSelect && this.select === null) {
      this.matSelect.value = this.select;
    }
  }

  public onSelectedOption(option: any): void {
    this.select = option;
    this.selectedFilterOption.emit(option);
  }
}

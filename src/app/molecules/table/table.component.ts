import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'table-molecule',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableMolecule implements OnInit {
    @Input() headerCells: string[];
    @Input() data: any;
    @Input() editColumn: boolean;

    @Output() editClicked: EventEmitter<{ dataItem: any, index: number }> = new EventEmitter<{ dataItem: any, index: number }>();

    public bodyCells: any[] = [];

    ngOnInit(): void {
        console.log(this.data)
        // let bodyCells = [];

        this.data.forEach(dataItem => this.bodyCells.push( Object.values(dataItem)));

        console.log(this.bodyCells)
        console.log(this.bodyCells.length)
    }

    public onEditClicked(dataItem: any, index: number): void {
        this.editClicked.emit({ dataItem, index });
    }
}
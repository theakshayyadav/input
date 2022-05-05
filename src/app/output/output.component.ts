import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {



  @Input() parentdata:any;

  constructor() { }
   @Output() event= new EventEmitter<string>()

  ngOnInit(): void {
  }




}

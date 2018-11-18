import { Component, OnInit } from '@angular/core';
import { OutputDetail } from '../datastructure';
import { PincodeserviceService } from '../pincodeservice.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {

  outputDetail:OutputDetail;


  constructor(private ps:PincodeserviceService) { 
    this.outputDetail=new OutputDetail();

  }

  ngOnInit() {
  
  console.log(this.outputDetail.Message);
  }


  onClick(event :any)
  {
    var da;
    da=event.target.value;
    console.log("hello"+da);
   
    this.ps.getOutputDataByPinCode(da).subscribe(
      data=> this.outputDetail=data
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { shareIndex } from '../../../../../../services-FANPAGE/model-FANPAGE/shareINDEX';
import { Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'm-create-share',
  templateUrl: './create-share.component.html',
  styleUrls: ['./create-share.component.scss']
})
export class CreateShareComponent implements OnInit {
  public create:shareIndex[]=[];
  public nameCamp:string;
  public currentShare:any;
  public sex:boolean;
  public age:boolean;
  public linkChiendich:URL
  constructor(private _router:Router,private data:DataService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  createShare(formCreate){
    const data ={
      "nameCamp":this.nameCamp,
      "currentShare":this.currentShare,
      "sex":this.sex,
      "age":this.age,
      "linkChiendich":this.linkChiendich
    }
    this.data.createShare(data)
    .subscribe(data=>{
      this._router.navigateByUrl('campaign/share/index-share')
      this.toastr.success("Bạn đã thêm thành công")
    },error=>{
      console.log(error);
    }
    )}

}

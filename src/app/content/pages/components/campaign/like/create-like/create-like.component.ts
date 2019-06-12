import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { likeIndex } from '../../../../../../services-FANPAGE/model-FANPAGE/likeINDEX';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'm-create-like',
  templateUrl: './create-like.component.html',
  styleUrls: ['./create-like.component.scss']
})
export class CreateLikeComponent implements OnInit {
  public create:likeIndex[];
  public nameCamp:string;
  public currentLike:any;
  public linkChiendich:URL;
  constructor(private data: DataService,private _router:Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  createLike(formCreate){
    const data={
      "nameCamp":this.nameCamp,
      "currentLike":this.currentLike,
      "linkChiendich":this.linkChiendich
    }
    this.data.createLike(data)
    .subscribe(data=>{
    
      this._router.navigateByUrl('campaign/like/index-like')
      this.toastr.success('Chào bạn','Bạn đã thêm dữ liệu thành công');
      
    },error=>{
      console.log(error);
    });
  };

}

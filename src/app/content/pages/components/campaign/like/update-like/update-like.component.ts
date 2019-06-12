import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'm-update-like',
  templateUrl: './update-like.component.html',
  styleUrls: ['./update-like.component.scss']
})
export class UpdateLikeComponent implements OnInit {
  idLike:string;
  public nameCamp:string;
  public currentLike:number;
  public linkChiendich:URL;

  constructor(private _acRouter:ActivatedRoute,private _data:DataService,private _router:Router,private toastr: ToastrService) { 
    this.idLike=this._acRouter.snapshot.params["id"]
    console.log(this.idLike);

    if(this.idLike){
      this._data.detailLike(this.idLike).subscribe(
        data=>{
          
          this.nameCamp = data.nameCamp;
          this.linkChiendich=data.linkChiendich;
          this.currentLike=data.currentLike;
         
        },error=>{
          console.log(error);
          
        })
    }
    
  }

  ngOnInit() {
  }

  updateLike(){
    const data={
      "nameCamp":this.nameCamp,
      "currentLike":this.currentLike,
      "linkChiendich":this.linkChiendich
    }
    this._data.updateLike(this.idLike,data).subscribe(data=>{
     
      this.toastr.success('Chào bạn','Bạn đã sửa dữ liệu thành công');
      this._router.navigateByUrl('/campaign/like/index-like')
    
    },error=>{
      console.log(error);
      
    })
  }
}

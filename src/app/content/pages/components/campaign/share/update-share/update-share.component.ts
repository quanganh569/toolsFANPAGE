import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'm-update-share',
  templateUrl: './update-share.component.html',
  styleUrls: ['./update-share.component.scss']
})
export class UpdateShareComponent implements OnInit {
  idShare:string;
  nameCamp:string;
  currentShare:number;
  sex:boolean;
  age:boolean;
  linkChiendich:URL;
  form: FormGroup;
  constructor(private _acRouter:ActivatedRoute,private _data:DataService,private _router:Router,private fb: FormBuilder,private toastr: ToastrService) {
    this.idShare=this._acRouter.snapshot.params["id"]
    // console.log(this.idShare); //Kiểm tra id tại console
    
    if(this.idShare){
      this._data.detailShare(this.idShare).subscribe(data=>{
        // console.log(data);  //Kiểm tra dữ liệu tại id đã chọn
        this.nameCamp=data.nameCamp;
        this.currentShare=data.currentShare;
        this.sex=data.sex;
        this.age=data.age;
        this.linkChiendich=data.linkChiendich;
      },error=>{
        console.log(error);     
      }
      )}
   }

  ngOnInit() {
  }

  updateShare(){
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.form = this.fb.group({
      s_url: ['', [Validators.required, Validators.pattern(reg)]],
    });
    const data = {
      "nameCamp":this.nameCamp,
      "currentShare":this.currentShare,
      "sex":this.sex,
      "age":this.age,
      "linkChiendich":this.linkChiendich,
    }
    this._data.updateShare(this.idShare,data).subscribe(data=>{
      this.toastr.success("Bạn đã cập nhật thành công")
      this._router.navigateByUrl('/campaign/share/index-share')
    },error=>{console.log(error);
    }
    )}
}

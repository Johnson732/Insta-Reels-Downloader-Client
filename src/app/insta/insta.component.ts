import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css'],
})
export class InstaComponent {
  constructor(private request:RequestService) {}
  userUrl:string='';
  loading:boolean=false;
  dataFetched: boolean = false;
  err:string='';
  //userUrl2:string='';

  videosrc:string='';
  postsrc:string[]=[];
  process(){
    this.loading = true;
    this.err='';
    this.request.getVideoSrc(this.userUrl).subscribe(
      (response:any)=>{
        this.dataFetched = true;
        this.loading = false;
        this.videosrc=response;
        this.openVideoInNewTab(this.videosrc);
      },(error: any) => {
        this.loading = false; // Stop loading animation
        this.err=error;
    }
    )
  }

  /*
  process2(){

    this.request.getPostSrc(this.userUrl2).subscribe(
      (response:any)=>{
        this.postsrc=response;

        //console.log(response);
      }
    )
  }
  */

  openVideoInNewTab(url: string) {
    window.open(url, '_blank');
  }




}

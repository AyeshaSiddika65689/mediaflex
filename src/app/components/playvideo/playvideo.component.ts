import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { videoModel } from 'src/app/Model/videoModel';
import { VideouploadService } from 'src/app/services/videoupload.service';
import { RatingsComponent } from '../ratings/ratings.component';

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.component.html',
  styleUrls: ['./playvideo.component.css']
})
export class PlayvideoComponent implements OnInit {

  displayVideoArray!:Array<any>

  videoDetails: videoModel[] = [];
  videoDetail = {
    title: '',
    desc: '',
    video:'' ,
    category:'' ,
    author: '',
  };


  constructor(
    private dialogePopUp: MatDialog,
    private videoServices: VideouploadService,
    private router:Router
  ) { this.displayVideoArray=[];}

  ngOnInit(): void {
    let videoId = localStorage.getItem('editVideoId');
    this.videoServices.getVideo(videoId).subscribe((data) => {
      this.videoDetail = JSON.parse(JSON.stringify(data));
    });


  }
  // rating component popup
  rateOpen() {
    this.dialogePopUp.open(RatingsComponent);
  }

    // delete a video
    deleteVideo(videoData: any) {
      this.videoServices.deleteVideo(videoData._id).subscribe((data) => {
        this.videoDetails = this.videoDetails.filter(
          (video) => video !== videoData
        );
        alert("video deleted")
        this.router.navigate(['dashboard'])
      });
    }
}
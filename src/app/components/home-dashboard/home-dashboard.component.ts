import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { videoModel } from 'src/app/Model/videoModel';
import { VideouploadService } from 'src/app/services/videoupload.service';
@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {


  videoData: videoModel[]=[]

  constructor(private router:Router, private videoService: VideouploadService, private dialoge:MatDialog) { }

  ngOnInit(): void {
      // get Trainer head Auth Details
      this.videoService.getVideosDetials().subscribe((data) => {
        this.videoData = JSON.parse(JSON.stringify(data));
      });
  }


    // get video Details
    VideoDetails(videoDatas: any) {
      localStorage.setItem('editVideoId', videoDatas._id.toString());
      this.router.navigate(['dashboard/playvideo']);
      // this.dialoge.open(VideoContentComponent)
    }

}

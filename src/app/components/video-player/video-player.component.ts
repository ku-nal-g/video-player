import { MusicDataService } from 'src/app/services/music-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  musicApiData: any = [];

  id: any;

  constructor(private _activatedRoute: ActivatedRoute, private musicData: MusicDataService) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (!!this.id) {
        this.musicData.get().subscribe((res) => {
          this.musicApiData = res[this.id];
          console.log(this.musicApiData);
        })
      }
    })
  }
}

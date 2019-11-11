import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    { id : '9_jQX-XqTRI/6TZW23644RP', song : 'Em ơi lên phố'},
    { id : 'GrEIA7Ut4A8/XYB7NCHEBEGT', song : 'Buồn lắm anh ơi'},
    { id : 'yn028QF2FPs/MMEAN3BQ13E5', song : 'Sai lầm của anh'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}

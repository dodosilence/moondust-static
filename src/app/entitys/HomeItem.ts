/**
 * Created by Tristan on 17/2/18.
 */
export class HomeItem{
  title:string;
  content:string;
  id:string;
  imgSrc:string;
  post:number;
  like:number;
  time:Date;
  active:Boolean;
  constructor(title: string, content: string, id: string, imgSrc: string, post: number, like: number, time: Date) {
    this.title = title;
    this.content = content;
    this.id = id;
    this.imgSrc = imgSrc;
    this.post = post;
    this.like = like;
    this.time = time;
  }


}

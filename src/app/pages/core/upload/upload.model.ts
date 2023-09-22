export interface IUpload {
  id?: any;
  newsTypeId?: any;
  mediaIds?: any;
  name?: any;
  content?: any;
  date?: any;
  thumbnail?: any;
}
export class DataUpload implements IUpload {
  constructor(
    public id?: any,
    public newsTypeId?: any,
    public mediaIds?: any,
    public name?: any,
    public content?: any,
    public date?: any,
    public thumbnail?: any
  ) {
    this.id = id ? id : null;
    this.newsTypeId = newsTypeId ? newsTypeId : null;
    this.mediaIds = mediaIds ? mediaIds : null;
    this.name = name ? name : null;
    this.content = content ? content : null;
    this.date = date ? date : null;
    this.thumbnail = thumbnail ? thumbnail : null;
  }
}

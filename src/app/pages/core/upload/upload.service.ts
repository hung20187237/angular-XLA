import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import {IUpload} from "./upload.model";


@Injectable({providedIn: 'root'})
export class UploadService {
    constructor(private http: HttpClient) {}

    CartoonizeImage( formData: any): Observable<any>  {
        return this.http.post(`http://127.0.0.1:5000/home-filter`, formData, { observe: 'response' })
    }
}

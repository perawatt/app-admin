import { Injectable } from '@angular/core';
import { IAdminService } from './iadmin';
import { API_URL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IAdminService {

  getAdminInfo(): Promise<any> {
    var adminId = "1";
    let apiUrl = this.baseUrl + "GetAdminInfo/" + adminId;
    return this.http.get(apiUrl).toPromise();
  }

  getUnfinishedOrder(): Promise<any> {
    var deliveryId = "1";
    let apiUrl = this.baseUrl + "GetUnfinishedOrder/" + deliveryId;
    return this.http.get(apiUrl).toPromise();

  }

  GetCancelRequest(): Promise<any> {
    var deliveryId = "1";
    let apiUrl = this.baseUrl + "GetCancelRequest/" + deliveryId;
    return this.http.get(apiUrl).toPromise();

  }
  // http://delivery-3rd-api.azurewebsites.net/api/AdminWeb/GetCancelRequest/1

  // TODO adminId
  private adminId: string = "1";
  private baseUrl: string = API_URL;
  constructor(private http: HttpClient) { }
}

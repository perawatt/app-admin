import { Injectable } from '@angular/core';
import { IAdminService } from './iadmin';
import { API_URL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IAdminService {

  getAdminInfo(): Promise<any> {
    let apiUrl = this.baseUrl + "GetAdminInfo/" + this.adminId;
    return this.http.get(apiUrl).toPromise();
  }

  getUnfinishedOrder(): Promise<any> {
    let apiUrl = this.baseUrl + "GetUnfinishedOrder/" + this.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getCancelRequest(): Promise<any> {
    let apiUrl = this.baseUrl + "GetCancelRequest/" + this.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getOrderDetial(orderId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetOrderDetail/" + this.deliveryId + "/" + orderId;
    return this.http.get(apiUrl).toPromise();
  }

  createSendCancelRequest(orderId: string, data: any): Promise<any> {
    let apiUrl = this.baseUrl + "SendCancelRequest/" + this.adminId + "/" + this.deliveryId + "/" + orderId;
    return this.http.post(apiUrl, data).toPromise();
  }

  updateSendCancelComfirm(cancelId: string, data: any): Promise<any> {
    let apiUrl = this.baseUrl + "SendCancelConfirm/" + this.adminId + "/" + this.deliveryId + "/" + cancelId;
    return this.http.put(apiUrl, data).toPromise();
  }

  updateSendCancelDeny(cancelId: string): Promise<any> {
    let apiUrl = this.baseUrl + "SendCancelDeny/" + this.adminId + "/" + this.deliveryId + "/" + cancelId;
    return this.http.put(apiUrl, {}).toPromise();
  }

  getRestaurant(): Promise<any> {
    let apiUrl = this.baseUrl + "GetRestaurant/" + this.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getRestaurantById(restaurantId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetRestaurant/" + this.deliveryId + "/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  createAddRestaurant(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "AddRestaurant/" + this.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  getRestaurantOrderHistory(restaurantId: string): Promise<any> {
    let apiUrl = this.baseUrl + "RestaurantOrderHistory/" + this.deliveryId + "/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  getBiker(): Promise<any> {
    let apiUrl = this.baseUrl + "GetBiker/" + this.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getBikerById(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetBiker/" + this.deliveryId + "/" + bikerId;
    return this.http.get(apiUrl).toPromise();
  }

  createAddBiker(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "AddBiker/" + this.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  updateSuspendBiker(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "SuspendBiker/" + this.deliveryId + "/" + bikerId;
    return this.http.put(apiUrl, {}).toPromise();
  }

  updateUnsuspendBiker(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "UnsuspendBiker/" + this.deliveryId + "/" + bikerId;
    return this.http.put(apiUrl, {}).toPromise();
  }

  getBikerFinance(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "BikerFinance/" + this.deliveryId + "/" + bikerId;
    return this.http.get(apiUrl).toPromise();
  }

  getBikerOrderHistory(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "BikerOrderHistory/" + this.deliveryId + "/" + bikerId;
    return this.http.get(apiUrl).toPromise();
  }

  getFinance(): Promise<any> {
    let apiUrl = this.baseUrl + "GetFinance/" + this.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  createFinance(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "CreateFinance/" + this.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  getFinanceById(financeId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetFinance/" + this.deliveryId + "/" + financeId;
    return this.http.get(apiUrl).toPromise();
  }

  deleteFinance(financeId: string): Promise<any> {
    let apiUrl = this.baseUrl + "DeleteFinance/" + this.deliveryId + "/" + financeId;
    return this.http.delete(apiUrl).toPromise();
  }

  getContractCondition(): Promise<any> {
    let apiUrl = this.baseUrl + "GetContractCondition/" + this.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  createContractCondition(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "CreateContractCondition/" + this.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  getContractConditionById(contractConditionId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetContractCondition/" + this.deliveryId + "/" + contractConditionId;
    return this.http.get(apiUrl).toPromise();
  }

  // TODO adminId
  private adminId: string = "1";
  private deliveryId: string = "1";
  private baseUrl: string = API_URL;
  constructor(private http: HttpClient) { }
}

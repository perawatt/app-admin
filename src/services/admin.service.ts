import { Injectable } from '@angular/core';
import { IAdminService } from './iadmin';
import { API_URL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AdminInfo } from 'src/providers/adminInfo/admin-info.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IAdminService {
  getAdminInfo(): Promise<any> {
    let apiUrl = this.baseUrl + "GetAdminInfo/" + AdminInfo.adminId;
    return this.http.get(apiUrl).toPromise();
  }
  //Restaurant
  getRestaurant(): Promise<any> {
    let apiUrl = this.baseUrl + "GetRestaurant/" + AdminInfo.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getRestaurantById(restaurantId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetRestaurant/" + AdminInfo.deliveryId + "/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  getRestaurantMenu(restaurantId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetRestaurantMenu/" + AdminInfo.deliveryId + '/' + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  getCategoryList(restaurantId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetCategory/" + AdminInfo.deliveryId + '/' + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  getRestaurantOrderHistory(restaurantId: string): Promise<any> {
    let apiUrl = this.baseUrl + "RestaurantOrderHistory/" + AdminInfo.deliveryId + "/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  getCategory(restaurantId: string, categoryId: string): Promise<any> {
    let apiUrl = this.baseUrl + "EditCategory/" + AdminInfo.deliveryId + '/' + restaurantId + '/' + categoryId;
    return this.http.get(apiUrl).toPromise();
  }

  getProduct(restaurantId: string, productId: string): Promise<any> {
    let apiUrl = this.baseUrl + "EditProduct/" + AdminInfo.deliveryId + '/' + restaurantId + '/' + productId;
    return this.http.get(apiUrl).toPromise();
  }

  createAddRestaurant(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "AddRestaurant/" + AdminInfo.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  createCategory(restaurantId: string, data: any): Promise<any> {
    let apiUrl = this.baseUrl + "CreateCategory/" + AdminInfo.deliveryId + '/' + restaurantId;
    return this.http.post(apiUrl, data).toPromise();
  }

  createProduct(restaurantId: string, data: any): Promise<any> {
    let apiUrl = this.baseUrl + "createProduct/" + AdminInfo.deliveryId + '/' + restaurantId;
    return this.http.post(apiUrl, data).toPromise();
  }

  updateCategory(restaurantId: string, categoryId: string, data: any): Promise<any> {
    let apiUrl = this.baseUrl + "EditCategory/" + AdminInfo.deliveryId + '/' + restaurantId + '/' + categoryId;
    return this.http.put(apiUrl, data).toPromise();
  }

  updateProduct(restaurantId: string, productId: string, data: any): Promise<any> {
    let apiUrl = this.baseUrl + "EditProduct/" + AdminInfo.deliveryId + '/' + restaurantId + '/' + productId;
    return this.http.put(apiUrl, data).toPromise();
  }

  deleteCategory(restaurantId: string, categoryId: string): Promise<any> {
    let apiUrl = this.baseUrl + "DeleteCategory/" + AdminInfo.deliveryId + '/' + restaurantId + '/' + categoryId;
    return this.http.delete(apiUrl, {}).toPromise();
  }

  deleteProduct(restaurantId: string, productId: string): Promise<any> {
    let apiUrl = this.baseUrl + "DeleteProduct/" + AdminInfo.deliveryId + '/' + restaurantId + '/' + productId;
    return this.http.delete(apiUrl, {}).toPromise();
  }

  getUnfinishedOrder(): Promise<any> {
    let apiUrl = this.baseUrl + "GetUnfinishedOrder/" + AdminInfo.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getCancelRequest(): Promise<any> {
    let apiUrl = this.baseUrl + "GetCancelRequest/" + AdminInfo.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getOrderDetail(orderId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetOrderDetail/" + AdminInfo.deliveryId + "/" + orderId;
    return this.http.get(apiUrl).toPromise();
  }

  createSendCancelRequest(orderId: string, data: any): Promise<any> {
    let apiUrl = this.baseUrl + "SendCancelRequest/" + AdminInfo.adminId + "/" + AdminInfo.deliveryId + "/" + orderId;
    return this.http.post(apiUrl, data).toPromise();
  }

  updateSendCancelComfirm(cancelId: string, data: any): Promise<any> {
    let apiUrl = this.baseUrl + "SendCancelConfirm/" + AdminInfo.adminId + "/" + AdminInfo.deliveryId + "/" + cancelId;
    return this.http.put(apiUrl, data).toPromise();
  }

  updateSendCancelDeny(cancelId: string): Promise<any> {
    let apiUrl = this.baseUrl + "SendCancelDeny/" + AdminInfo.adminId + "/" + AdminInfo.deliveryId + "/" + cancelId;
    return this.http.put(apiUrl, {}).toPromise();
  }

  getBiker(): Promise<any> {
    let apiUrl = this.baseUrl + "GetBiker/" + AdminInfo.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getBikerById(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetBiker/" + AdminInfo.deliveryId + "/" + bikerId;
    return this.http.get(apiUrl).toPromise();
  }

  createAddBiker(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "AddBiker/" + AdminInfo.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  updateSuspendBiker(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "SuspendBiker/" + AdminInfo.deliveryId + "/" + bikerId;
    return this.http.put(apiUrl, {}).toPromise();
  }

  updateUnsuspendBiker(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "UnsuspendBiker/" + AdminInfo.deliveryId + "/" + bikerId;
    return this.http.put(apiUrl, {}).toPromise();
  }

  getBikerFinance(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "BikerFinance/" + AdminInfo.deliveryId + "/" + bikerId;
    return this.http.get(apiUrl).toPromise();
  }

  getBikerOrderHistory(bikerId: string): Promise<any> {
    let apiUrl = this.baseUrl + "BikerOrderHistory/" + AdminInfo.deliveryId + "/" + bikerId;
    return this.http.get(apiUrl).toPromise();
  }

  getFinance(): Promise<any> {
    let apiUrl = this.baseUrl + "GetFinance/" + AdminInfo.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  createFinance(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "CreateFinance/" + AdminInfo.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  getFinanceById(financeId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetFinance/" + AdminInfo.deliveryId + "/" + financeId;
    return this.http.get(apiUrl).toPromise();
  }

  deleteFinance(financeId: string): Promise<any> {
    let apiUrl = this.baseUrl + "DeleteFinance/" + AdminInfo.deliveryId + "/" + financeId;
    return this.http.delete(apiUrl).toPromise();
  }

  getContractCondition(): Promise<any> {
    let apiUrl = this.baseUrl + "GetContractCondition/" + AdminInfo.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  createContractCondition(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "CreateContractCondition/" + AdminInfo.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  getContractConditionById(contractConditionId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetContractCondition/" + AdminInfo.deliveryId + "/" + contractConditionId;
    return this.http.get(apiUrl).toPromise();
  }

  getSasToken(): Promise<any> {
    let apiUrl = 'https://delivery-3rd-api.azurewebsites.net/api/Storage/Up2Cloud';
    return this.http.post(apiUrl, {}).toPromise();
  }

  getSasManaUpload(imageId?: string): Promise<any> {
    console.log(imageId);
    let apiUrl = 'https://manamockapi.azurewebsites.net/Image/sas?type=1&refid=1&serviceId=1&bizAccountId=1';
    if (imageId) apiUrl += "&imageId=" + imageId;
    console.log(apiUrl);
    return this.http.get(apiUrl).toPromise();
  }

  getImageUpload(imageId: string): Promise<any> {
    let apiUrl = 'https://manamockapi.azurewebsites.net/Image/' + imageId;
    return this.http.get(apiUrl).toPromise();
  }

  getRestaurantMenuById(restaurantId: string): Promise<any> {
    let apiUrl = 'https://delivery-3rd-api.azurewebsites.net/api/Restaurant/GetRestaurantMenu/' + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  getAdmin(): Promise<any> {
    let apiUrl = this.baseUrl + "GetAdmin/" + AdminInfo.deliveryId;
    return this.http.get(apiUrl).toPromise();
  }

  getAdminById(): Promise<any> {
    let apiUrl = this.baseUrl + "GetAdmin/" + AdminInfo.deliveryId + "/" + AdminInfo.adminId;
    return this.http.get(apiUrl).toPromise();
  }

  createAdmin(data: any): Promise<any> {
    let apiUrl = this.baseUrl + "AddAdmin/" + AdminInfo.deliveryId;
    return this.http.post(apiUrl, data).toPromise();
  }

  // TODO adminId
  private baseUrl: string = API_URL;
  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { IAdminService } from './iadmin';
import { API_URL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IAdminService {

  // TODO adminId
  private adminId: string = "1";
  private baseUrl: string = API_URL;
  constructor(private http: HttpClient) { }
}

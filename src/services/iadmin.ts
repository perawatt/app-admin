export interface IAdminService {

    getAdminInfo(): Promise<any>;

    getUnfinishedOrder(): Promise<any>;
    
    GetCancelRequest(): Promise<any>;

}

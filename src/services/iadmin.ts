export interface IAdminService {

    getAdminInfo(): Promise<any>;

    getUnfinishedOrder(): Promise<any>;

    getCancelRequest(): Promise<any>;

    getOrderDetail(orderId: string): Promise<any>;

    createSendCancelRequest(orderId: string, data: any): Promise<any>;

    updateSendCancelComfirm(cancelId: string, data: any): Promise<any>;

    updateSendCancelDeny(cancelId: string): Promise<any>;

    getRestaurant(): Promise<any>;

    getRestaurantById(restaurantId: string): Promise<any>;

    createAddRestaurant(data: any): Promise<any>;

    getRestaurantOrderHistory(restaurantId: string): Promise<any>;

    getBiker(): Promise<any>;

    getBikerById(bikerId: string): Promise<any>;

    createAddBiker(data: any): Promise<any>;

    updateSuspendBiker(bikerId: string): Promise<any>;

    updateUnsuspendBiker(bikerId: string): Promise<any>;

    getBikerFinance(bikerId: string): Promise<any>;

    getBikerOrderHistory(bikerId: string): Promise<any>;

    getFinance(): Promise<any>;

    createFinance(data: any): Promise<any>;

    getFinanceById(financeId: string): Promise<any>;

    deleteFinance(financeId: string): Promise<any>;

    getContractCondition(): Promise<any>;

    createContractCondition(data: any): Promise<any>;

    getContractConditionById(contractConditionId: string): Promise<any>;





























}

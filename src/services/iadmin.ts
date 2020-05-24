export interface IAdminService {

    getAdminInfo(): Promise<any>;

    getRestaurant(): Promise<any>;

    getUnfinishedOrder(): Promise<any>;

    getCancelRequest(): Promise<any>;

    getOrderDetail(orderId: string): Promise<any>;

    getRestaurantMenu(restaurantId: string): Promise<any>;

    getCategoryList(restaurantId: string): Promise<any>;

    getRestaurantById(restaurantId: string): Promise<any>;

    getRestaurantOrderHistory(restaurantId: string): Promise<any>;

    getBiker(): Promise<any>;

    getBikerById(bikerId: string): Promise<any>;

    getBikerFinance(bikerId: string): Promise<any>;

    getBikerOrderHistory(bikerId: string): Promise<any>;

    getFinance(): Promise<any>;

    getFinanceById(financeId: string): Promise<any>;

    getContractCondition(): Promise<any>;

    getContractConditionById(contractConditionId: string): Promise<any>;

    getSasToken(): Promise<any>;

    createSendCancelRequest(orderId: string, data: any): Promise<any>;

    createAddRestaurant(data: any): Promise<any>;

    createCategory(restaurantId: string, data: any): Promise<any>;

    createProduct(restaurantId: string, data: any): Promise<any>;

    createAddBiker(data: any): Promise<any>;

    createFinance(data: any): Promise<any>;

    createContractCondition(data: any): Promise<any>;

    updateSendCancelComfirm(cancelId: string, data: any): Promise<any>;

    updateSuspendBiker(bikerId: string): Promise<any>;

    updateSendCancelDeny(cancelId: string): Promise<any>;

    updateUnsuspendBiker(bikerId: string): Promise<any>;

    deleteFinance(financeId: string): Promise<any>;





}

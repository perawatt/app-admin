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

    getCategory(restaurantId: string, categoryId: string): Promise<any>;

    getProduct(restaurantId: string, productId: string): Promise<any>;

    getBiker(): Promise<any>;

    getBikerById(bikerId: string): Promise<any>;

    getBikerFinance(bikerId: string): Promise<any>;

    getBikerOrderHistory(bikerId: string): Promise<any>;

    getFinance(): Promise<any>;

    getFinanceById(financeId: string): Promise<any>;

    getContractCondition(): Promise<any>;

    getContractConditionById(contractConditionId: string): Promise<any>;

    getSasToken(): Promise<any>;

    getSasManaUpload(): Promise<any>;

    getImageUpload(imageId: string): Promise<any>;

    createSendCancelRequest(orderId: string, data: any): Promise<any>;

    createAddRestaurant(data: any): Promise<any>;

    createCategory(restaurantId: string, data: any): Promise<any>;

    createProduct(restaurantId: string, data: any): Promise<any>;

    createAddBiker(data: any): Promise<any>;

    createFinance(data: any): Promise<any>;

    createContractCondition(data: any): Promise<any>;

    updateSendCancelComfirm(cancelId: string, data: any): Promise<any>;

    updateCategory(restaurantId: string, categoryId: string, data: any): Promise<any>;

    updateProduct(restaurantId: string, productId: string, data: any): Promise<any>;

    updateSuspendBiker(bikerId: string): Promise<any>;

    updateSendCancelDeny(cancelId: string): Promise<any>;

    updateUnsuspendBiker(bikerId: string): Promise<any>;

    deleteFinance(financeId: string): Promise<any>;

    getRestaurantMenuById(restaurantId: string): Promise<any>;

    getAdmin(): Promise<any>;

    getAdminById(): Promise<any>;

    createAdmin(data: any): Promise<any>;

    deleteCategory(restaurantId: string, categoryId: string): Promise<any>;

    deleteProduct(restaurantId: string, productId: string): Promise<any>;











}

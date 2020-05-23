import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'operation',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'operation',
    loadChildren: () => import('./operation/operation.module').then(m => m.OperationPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./finance/finance.module').then(m => m.FinancePageModule)
  },
  {
    path: 'restaurant-profile-menu',
    loadChildren: () => import('./restaurant-profile-menu/restaurant-profile-menu.module').then(m => m.RestaurantProfileMenuPageModule)
  },
  {
    path: 'restaurant-profile-menu-create',
    loadChildren: () => import('./restaurant-profile-menu-create/restaurant-profile-menu-create.module').then(m => m.RestaurantProfileMenuCreatePageModule)
  },
  {
    path: 'restaurant-edit-category',
    loadChildren: () => import('./restaurant-edit-category/restaurant-edit-category.module').then(m => m.RestaurantEditCategoryPageModule)
  },
  {
    path: 'restaurant-create-category',
    loadChildren: () => import('./restaurant-create-category/restaurant-create-category.module').then(m => m.RestaurantCreateCategoryPageModule)
  },
  {
    path: 'restaurant-profile',
    loadChildren: () => import('./restaurant-profile/restaurant-profile.module').then(m => m.RestaurantProfilePageModule)
  },
  {
    path: 'biker',
    loadChildren: () => import('./biker/biker.module').then(m => m.BikerPageModule)
  },
  {
    path: 'biker/biker-detail/:bikerId',
    loadChildren: () => import('./biker-detail/biker-detail.module').then(m => m.BikerDetailPageModule)
  },
  {
    path: 'biker/biker-detail/:bikerId/biker-balance',
    loadChildren: () => import('./biker-balance/biker-balance.module').then(m => m.BikerBalancePageModule)
  },
  {
    path: 'biker/biker-detail/:bikerId/biker-history/:bikerId',
    loadChildren: () => import('./biker-history/biker-history.module').then(m => m.BikerHistoryPageModule)
  },
  {
    path: 'biker/biker-detail/:bikerId/biker-history/:bikerId/biker-history-detail/:orderId',
    loadChildren: () => import('./biker-history-detail/biker-history-detail.module').then(m => m.BikerHistoryDetailPageModule)
  },
  { 
    path: 'biker/biker-create',
    loadChildren: () => import('./biker-create/biker-create.module').then( m => m.BikerCreatePageModule)
  },
  {
    path: 'restaurant-profile-history',
    loadChildren: () => import('./restaurant-profile-history/restaurant-profile-history.module').then(m => m.RestaurantProfileHistoryPageModule)
  },
  {
    path: 'finance-confirm',
    loadChildren: () => import('./finance-confirm/finance-confirm.module').then(m => m.FinanceConfirmPageModule)
  },
  {
    path: 'restaurant-create-qr',
    loadChildren: () => import('./restaurant-create-qr/restaurant-create-qr.module').then(m => m.RestaurantCreateQrPageModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(m => m.ContractPageModule)
  },
  {
    path: 'contract/contract-detail/:contractConditionId',
    loadChildren: () => import('./contract-detail/contract-detail.module').then(m => m.ContractDetailPageModule)
  },
  {
    path: 'contract/contract-create',
    loadChildren: () => import('./contract-create/contract-create.module').then(m => m.ContractCreatePageModule)
  },
  {
    path: 'operation-confirm-cancel-order',
    loadChildren: () => import('./operation-confirm-cancel-order/operation-confirm-cancel-order.module').then(m => m.OperationConfirmCancelOrderPageModule)
  },
  {
    path: 'operation-attention-detail',
    loadChildren: () => import('./operation-attention-detail/operation-attention-detail.module').then(m => m.OperationAttentionDetailPageModule)
  },
  {
    path: 'restaurant-create',
    loadChildren: () => import('./restaurant-create/restaurant-create.module').then(m => m.RestaurantCreatePageModule)
  },
  {
    path: 'finance/finance-create',
    loadChildren: () => import('./finance-create/finance-create.module').then(m => m.FinanceCreatePageModule)
  },
  {
    path: 'finance/finance-detail/:_id',
    loadChildren: () => import('./finance-detail/finance-detail.module').then(m => m.FinanceDetailPageModule)
  },
  {
    path: 'operation-attention-list',
    loadChildren: () => import('./operation-attention-list/operation-attention-list.module').then(m => m.OperationAttentionListPageModule)
  },
  {
    path: 'restaurant-profile-history-detail',
    loadChildren: () => import('./restaurant-profile-history-detail/restaurant-profile-history-detail.module').then(m => m.RestaurantProfileHistoryDetailPageModule)
  },
  {
    path: 'operation/operation-order-detail/:_id',
    loadChildren: () => import('./operation-order-detail/operation-order-detail.module').then(m => m.OperationOrderDetailPageModule)
  },
  {
    path: 'operation-order-cancel',
    loadChildren: () => import('./operation-order-cancel/operation-order-cancel.module').then( m => m.OperationOrderCancelPageModule)
  }


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
    path: 'biker',
    loadChildren: () => import('./biker/biker.module').then(m => m.BikerPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./finance/finance.module').then(m => m.FinancePageModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(m => m.ContractPageModule)
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
    path: 'biker-detail',
    loadChildren: () => import('./biker-detail/biker-detail.module').then(m => m.BikerDetailPageModule)
  },
  {
    path: 'biker-balance',
    loadChildren: () => import('./biker-balance/biker-balance.module').then(m => m.BikerBalancePageModule)
  },
  {
    path: 'biker-history',
    loadChildren: () => import('./biker-history/biker-history.module').then(m => m.BikerHistoryPageModule)
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
    path: 'contract-detail',
    loadChildren: () => import('./contract-detail/contract-detail.module').then(m => m.ContractDetailPageModule)
  },  {
    path: 'operation-confirm-cancel-order',
    loadChildren: () => import('./operation-confirm-cancel-order/operation-confirm-cancel-order.module').then( m => m.OperationConfirmCancelOrderPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

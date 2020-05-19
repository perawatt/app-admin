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
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'operation',
    loadChildren: () => import('./operation/operation.module').then( m => m.OperationPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'biker',
    loadChildren: () => import('./biker/biker.module').then( m => m.BikerPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then( m => m.ContractPageModule)
  },  {
    path: 'biker-balance',
    loadChildren: () => import('./biker-balance/biker-balance.module').then( m => m.BikerBalancePageModule)
  },
  {
    path: 'biker-history',
    loadChildren: () => import('./biker-history/biker-history.module').then( m => m.BikerHistoryPageModule)
  },
  {
    path: 'restaurant-profile-history',
    loadChildren: () => import('./restaurant-profile-history/restaurant-profile-history.module').then( m => m.RestaurantProfileHistoryPageModule)
  },
  {
    path: 'finance-confirm',
    loadChildren: () => import('./finance-confirm/finance-confirm.module').then( m => m.FinanceConfirmPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

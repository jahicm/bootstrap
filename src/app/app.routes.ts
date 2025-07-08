import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TdfComponent } from './tdf/tdf.component';
import { PaintingsComponent } from './paintings/paintings.component';

export const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'paintings', component: PaintingsComponent },
  { path: 'reactive', component: ReactiveformComponent },
  { path: 'tdf', component: TdfComponent },
  { path: '**', component: BaseComponent },
];

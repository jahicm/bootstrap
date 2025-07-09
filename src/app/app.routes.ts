import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { TdfComponent } from './tdf/tdf.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { DataFormComponent } from './reactiveform/dataform.component';

export const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'paintings', component: PaintingsComponent },
  { path: 'reactive', component: DataFormComponent },
  { path: 'tdf', component: TdfComponent },
  { path: '**', component: BaseComponent },
];

import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { TdfComponent } from './tdf/tdf.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { DataFormComponent } from './reactiveform/dataform.component';
import { ChartComponent } from './chart/chart.component';
import { DataComponent } from './data/data.component';


export const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'paintings', component: PaintingsComponent },
  { path: 'reactive', component: DataFormComponent },
  { path: 'tdf', component: TdfComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'data', component: DataComponent },
  { path: '**', component: BaseComponent }

];

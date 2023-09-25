import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {AiDetectionComponent} from "./component/Ai Detection/aiDetection.component";

const routes: Routes = [
  { path: '', component: DashboardComponent,  },
  {
    path: '',
    data: {
      title: 'Quản lý bài viết'
    },
    children: [
      {
        path: 'ai-detection',
        component: AiDetectionComponent,
        data: {
          title: 'Ai-Detection'
        }
      },
      {
        path: 'cgate',
        component: AiDetectionComponent,
        data: {
          title: 'Cgate'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

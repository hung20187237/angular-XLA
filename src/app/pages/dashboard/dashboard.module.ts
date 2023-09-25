import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {ReactiveFormsModule} from "@angular/forms";
import {AiDetectionComponent} from "./component/Ai Detection/aiDetection.component";


@NgModule({
  imports: [DashboardRoutingModule, NzGridModule, NzIconModule, NzLayoutModule, NzMenuModule, NzCarouselModule, NgForOf, NzButtonModule, NzUploadModule, ReactiveFormsModule, NgOptimizedImage, NgIf],
  declarations: [DashboardComponent, AiDetectionComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }

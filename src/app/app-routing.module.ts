import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscussionsComponent } from './discussions/discussions.component';

const routes: Routes = [

    { path: '', component: DashboardComponent },

    { path: 'courses', component: CoursesComponent },
    { path: 'discussion', component: DiscussionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

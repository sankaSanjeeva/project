import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { LogInComponent } from './log-in/log-in.component';
import { ConstructorDetailsComponent } from './constructor-details/constructor-details.component';

import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';

import {ConstructorService} from './constructor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatSnackBarModule, MatSortModule, MatExpansionModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatListModule, MatSidenavModule, MatTabsModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule } from '@angular/material';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'category', component: CategoryComponent},
  {path:'register', component: RegisterComponent},
  {path:'logIn', component: LogInComponent},
  {path:'category/details/:id', component: ConstructorDetailsComponent},
  {path:'**',redirectTo:'home'}
];



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    LogInComponent,
    ConstructorDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSnackBarModule,
    MatSortModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule
    
  ],
  providers: [ConstructorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

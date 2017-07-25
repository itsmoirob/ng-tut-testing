import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoterComponent } from './07-voter/voter.component';
import { TodosComponent } from './08-todos/todos.component';
import { UserDetailsComponent } from './09-user-details/user-details.component';

import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
// import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';
import { NavComponent } from './nav/nav.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    // NavComponent,
    HighlightDirective,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//prideta mano
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { TodoService } from './todo-list/shared/todo.service';

//end

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './todo-list/form/form.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodoListComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

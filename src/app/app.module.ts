import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FiliereComponent } from './filiere/filiere.component';
import { ClasseComponent } from './classe/classe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ModalCreateClasseComponent } from './modal-create-classe/modal-create-classe.component';
import { ModalEditClasseComponent } from './modal-edit-classe/modal-edit-classe.component';
import { ModalCofirmDialogComponent } from './modal-cofirm-dialog/modal-cofirm-dialog.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    FiliereComponent,
    ClasseComponent,
    ModalMessageComponent,
    AdminComponent,
    UserComponent,
    ModalCreateClasseComponent,
    ModalEditClasseComponent,
    ModalCofirmDialogComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ModalMessageComponent,ModalCreateClasseComponent,ModalEditClasseComponent,ModalCofirmDialogComponent]
})
export class AppModule { }

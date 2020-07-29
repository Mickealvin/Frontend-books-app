import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';


const routes: Routes = [
  {path:'book-detail/:id', component: BookDetailComponent },
  {path:'book-create', component: BookCreateComponent},
  { path:'book-list', component: BookListComponent },
  {path:'book', component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

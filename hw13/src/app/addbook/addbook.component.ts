import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../book';
import { BookstoreService } from '../bookstore.service';



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
book: Book = new Book();
constructor(private bookService: BookstoreService) { }
      id = '';
      name = 'Test';
      author = '';
      pyear = '';
      price = '';

  addbookFormSubmit() {
      this.book.name = this.name;
      this.book.year = Number(this.pyear);
      this.book.author = this.author;
      this.book.price = Number(this.price);
      this.bookService.addBookToServer(this.book).subscribe(res => {
        console.log(res);
      });
    }
}

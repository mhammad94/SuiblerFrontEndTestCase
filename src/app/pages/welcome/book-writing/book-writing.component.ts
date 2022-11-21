import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WordDetailsService } from 'src/app/services/word-details.service';
import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';
import { WordAPIResponseModel } from 'src/app/models/WordAPI.response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-writing',
  templateUrl: './book-writing.component.html',
  styleUrls: ['./book-writing.component.css']
})
export class BookWritingComponent implements OnInit {

  selectedText:string = '';
  placement = 'topRight';
  wordData: WordAPIResponseModel = new WordAPIResponseModel();
  wordDataDrawerShow:boolean = false;
  textContent:string = '';

  constructor(private wordsService:WordDetailsService,
              private notification: NzNotificationService,
              private router:Router
              ) { }

  ngOnInit(): void {

  }

  getInfoOnSelectedWord(){
    this.selectedText = window.getSelection()?.toString()!;
    this.wordsService.getWordDetails(this.selectedText).subscribe(res => {
      this.wordData = res;
      this.wordDataDrawerShow = true;
      console.log(this.wordData)
    },(err) => {
      let errorObj = err.error;
      this.notification.error(
        'Error',
        errorObj.message,
        { nzPlacement: 'topRight' }
      )
    });
  }

  close(){
    this.wordDataDrawerShow = false
  }

  navigateToSubmit(){
    if(this.textContent !== ''){
      this.router.navigateByUrl('/welcome/submission');
    }else{
      this.notification.error(
        'Error',
        'Please enter thoughts',
        { nzPlacement: 'topRight' }
      )
    }

  }

}

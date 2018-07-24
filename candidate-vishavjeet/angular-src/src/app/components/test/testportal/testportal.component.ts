import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  ElementRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { setInterval, clearInterval } from 'timers';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { disconnect } from 'cluster';

import { ServerService } from 'app/services/server.service';
import { ResponseService } from 'app/services/response.service';
import { environment } from 'environments/environment';

declare var alertify: any;

@Component({
  selector: 'app-testportal',
  templateUrl: './testportal.component.html',
  styleUrls: ['./testportal.component.css']
})
export class TestportalComponent implements OnInit {
  public elementRef;

  disconnectTime = {};
  connectedTime = {};
  timeGaps = [];
  count = 0;
  failureTime: any;
  testList;
  testcount;
  checkIndex = [];
  getIndex = false;
  response = [];
  newTime: any;
  newTime1: any;
  //================================CALCULATOR VARIABLES============
  calOpen: boolean = false;
  //==================================================================
  tabchange: number = 0;
  //-----------------------------------------
  //       Handling Tab Change
  //-----------------------------------------
  @HostListener('window:visibilitychange', ['$event'])
  public visibilitychange($event) {
    var hidden, visibilityChange;
    if (typeof document.hidden !== 'undefined') {
      hidden = 'hidden';
      visibilityChange = 'visibilityChange';
    }
    if (document[hidden]) {
      console.log('tab is changed just now', this.tabchange);
      this.tabchange = this.tabchange + 1;

      // on req complete

      //   if (this.tabchange === 1) {
      //     console.log('Do not try to mislead during test!!');
      //   } else if (this.tabchange === 3) {
      //     console.log('Warning Your test will be submitted!!');
      //   } else if (this.tabchange === 5) {
      //     console.log('Your test is submitted!!');
      //     this.responseService.onFinish()
      //       .subscribe(
      //       data => {
      //         // console.log(data);
      //         if (data.success) {
      //           this.router.navigate(['/test/finishtest']);
      //           setTimeout((router: Router) => {
      //             this.router.navigate(['/dashboard']);
      //           }, 3000);
      //         }
      //       },
      //       err => {
      //         console.log(err);
      //       }
      
      //       );
      //   }
      this.responseService.mischeivehandler(this.tabchange).subscribe(
        res => {
          console.log(res);
          if (res.success) {
            alertify('you cannot change tab during test');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  @HostListener('window:blur', ['$event'])
  public blur($event) {
    var hidden, visibilityChange;
    if (typeof document.hidden !== 'undefined') {
      hidden = 'hidden';
      visibilityChange = 'visibilityChange';
    }
    if (document[hidden]) {
      // this.tabchange = this.tabchange + 1;
      console.log('blur', this.tabchange);
    }
  }

  // --------------------------------------I
  // Indexing Questions and Logic
  // --------------------------------------I
  intiIndex = 0; // Intially the showing index set to 0
  maxIndex;
  radioStatus = [];
  reviewStatus = [];
  clearStatus = [];
  // --------------------------------------------
  // Window close
  // --------------------------------------------
  closeStatus;
  // Next and prev
  plusQues(val) {
    this.intiIndex += val; // Adding or Subtracting based on navigation
  }
  // On selecting from pagination
  onlistSelect(val) {
    this.intiIndex = val; // Assigning to show perticular Test
  }
  // res = [];
  radioChecked(event, id) {
    // this.responce is empty Array
    let option: any;
    option = event.target.value;
    let key = id + 1;
    let found = false;
    for (let i = 0; i < this.response.length; i++) {
      if (this.response[i].key === key) {
        this.response[i].value = option;
        found = true;
        break;
      }
    }

    if (!found) {
      this.response.push({ key: key, value: option });
    }
    var clientSequence = new Date().toISOString();
    this.responseService.response(this.response, clientSequence);
  }
  radio(val) {
    this.reviewStatus[val] = false;
    this.radioStatus[val] = true;
  }
  clearForm(form) {
    form.checked = false;
  }
  reviewClicked(index) {
    this.radioStatus[index] = false;
    this.reviewStatus[index] = true;
    this.clearStatus[index] = false;
  }
  reviewClear(ind) {
    this.clearStatus[ind] = true;
    this.reviewStatus[ind] = false;
    this.radioStatus[ind] = false;
  }
  constructor(
    private responseService: ResponseService,
    private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //-----------------------------------------------
    //           keypress event detected
    // -----------------------------------------------
    document.addEventListener(
      'keydown',
      function (e: KeyboardEvent) {
        console.log('keypress');
        e.preventDefault();
      },
      true
    );
    // -----------------------------------------
    //         right click event
    //-----------------------------------------
    document.addEventListener('contextmenu', function (e) {
      console.log('menu click');
      e.preventDefault();
    });
    //----------------------------------------------
    //  To handle copy, cut and paste event on the page
    // ----------------------------------------------
    document.addEventListener(
      'copy',
      function handleCopy(e: KeyboardEvent) {
        console.log('Coping');
        e.preventDefault();
      },
      true
    );
    document.addEventListener(
      'cut',
      function handleCopy(e: KeyboardEvent) {
        console.log('cut');
        e.preventDefault();
      },
      true
    );
    document.addEventListener(
      'paste',
      function handleCopy(e: KeyboardEvent) {
        console.log('paste');
        e.preventDefault();
      },
      true
    );
    // ----------------------------------------------
    //       Handle selection of text on page
    // ----------------------------------------------
    document.addEventListener(
      'select',
      function (e) {
        e.preventDefault();
      },
      true
    );
    // ----------------------------------------------
    //       Handling window reload or tab Close
    // ----------------------------------------------
    window.addEventListener(
      'beforeunload',
      function (event) {
        var message =
          "Important: Please click on 'Save' button to leave this page.";
        if (typeof event == 'undefined') {
          event = window.event;
        }
        if (event) {
          event.returnValue = message;
        }
        return message;
      },
      false
    );
  }
  myVar: any;
  ngOnInit() {
    this.myVar = setInterval(() => {
      var clientSequence = new Date().toISOString();
      this.responseService.response(this.response, clientSequence)
    }, environment.periodicCallInterval);
    // this.testList = this.testServive.testListAll; // Assigning test to the list coming from service
    this.testcount = this.testList; // Counting the coming questions
    // this.maxIndex = this.testList.length - 1; // Assigning the maxquestion limit also working in disabling next button
    // console.log(this.intiIndex + ' ' + this.maxIndex);
    const testid = localStorage.getItem('testID');
    const quesIds = localStorage.getItem('quesId');
    if (localStorage.getItem('quesList')) {
      this.testList = JSON.parse(localStorage.getItem('quesList'));
      this.maxIndex = this.testList.length - 1;
    } else {
      this.serverService.fetchQuestions(this.serverService.quesIds).subscribe(
        data => {
          localStorage.setItem('quesList', JSON.stringify(data));

          this.testList = JSON.parse(localStorage.getItem('quesList'));
          this.maxIndex = this.testList.length - 1;
          // console.log(this.testList);
        },
        err => {
          console.log(err);
          const error = JSON.parse(err._body);
          alertify.alert(error.msg);
        },
        () => {
          console.log('finish');
        }
      );
    }
  }
  //  --------------------------------------------
  // Finish Test Logic
  // ----------------------------------------------
  onFinishClick() {
    var alert = confirm('Are you sure you want to finish the test?');
    if (alert) {
      var mode = 'userSubmit'
      this.responseService.getFinish(mode).subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/test/finishtest']);
          setTimeout((router: Router) => {
            this.router.navigate(['/dashboard']);
          }, 3000);
        },
        err => {
          console.log(err);
          const error = JSON.parse(err._body);
          alertify.alert(error.msg);
        }
      );
    }
  }
  //============================================================
  //                    CALCULATOR APP
  //============================================================
  onCalculatorOpen() {
    this.calOpen = !this.calOpen;
  }
  ngOnDestroy() {
    clearInterval(this.myVar);
  }
}

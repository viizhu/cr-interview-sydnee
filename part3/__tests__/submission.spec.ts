import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConfigureFn, configureTests } from '../src/lib/testing';
import { AppComponent } from '../src/app/app.component';

// We won't be looking at changes in this file.

describe('Submission Tests', () => { 
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    const configure: ConfigureFn = (testBed: TestBed) => {
      testBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [NO_ERRORS_SCHEMA]
      });
    };

    configureTests(configure).then((testBed: TestBed) => {
      fixture = testBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));
  
  it("you should test changes in the Web Preview", async () => {
    expect(true).toBe(true);
  });
});

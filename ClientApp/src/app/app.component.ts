import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DC3 Support';
  handleClick(task: any, formId: string) {
    let tabContent = document.getElementsByClassName("forms") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }
    let tabLinks = document.getElementsByClassName("nav-item");
    for (let idx = 0; idx < tabLinks.length; idx++) {
      tabLinks[idx].className = tabLinks[idx].className.replace(" active", "");
    }

    document.getElementById(formId).style.display = 'block';
    task.currentTarget.className += " active";
  }
}
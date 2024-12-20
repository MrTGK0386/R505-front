import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isWindowSmall : boolean = false;
  private intervallId!: number;

  ngOnInit() {
    this.TestWindowSize();
    this.intervallId = window.setInterval(() => {
      this.TestWindowSize();
    },1000);
  }

  TestWindowSize(){
    if (window.innerWidth <= 767){
      this.isWindowSmall = true;
    }
    else {
      this.isWindowSmall = false;
    }
    return this.isWindowSmall;
  }

  isDarkMode = false;

  onBack(): void {
    return;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    // Ajoutez ici la logique pour changer le thème
  }

  onSearch(): void {
    // Logique pour la recherche
  }

  onGridView(): void {
    // Logique pour changer la vue
  }

  ngOnDestroy() {
    if (this.intervallId) {
      clearInterval(this.intervallId);
    }
  }


}

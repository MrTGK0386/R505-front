import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {TranslocoService} from "@jsverse/transloco";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss'
})
export class LangSelectorComponent {

  selectedLang!: string;

  constructor(
    public translocoService: TranslocoService
  ) {
    this.selectedLang = this.translocoService.getActiveLang()
  }
}

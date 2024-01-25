import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})

export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, term: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(
      value.replace(new RegExp(term, 'gi'), match => {
        return `<b>${match}</b>`;
      })
    );
  }
}




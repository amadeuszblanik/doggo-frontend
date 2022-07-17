/* eslint-disable no-magic-numbers */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: Date): string {
    value = new Date(value);

    const diff = Math.floor(Math.abs(Date.now() - value.getTime()) / 1000);
    const years = Math.floor(diff / (365 * 24 * 60 * 60));
    const months = Math.floor((diff - years * 365 * 24 * 60 * 60) / (30 * 24 * 60 * 60));
    const days = Math.floor((diff - years * 365 * 24 * 60 * 60 - months * 30 * 24 * 60 * 60) / (24 * 60 * 60));

    const lifeSpan = [];

    if (years) {
      lifeSpan.push(`${years} years`);
    }

    if (months) {
      lifeSpan.push(`${months} months`);
    }

    if (!years && days) {
      lifeSpan.push(`${days} days`);
    }

    return lifeSpan.join(' ') || 'Just now!';
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { User } from './app.component';

@Pipe({
  name: 'adultUsersNames',
})
export class AdultUsersNamesPipe implements PipeTransform {
  transform(users: User[]): string[] {
    return users.filter((u) => u.age >= 18).map((u) => u.firstName);
  }
}

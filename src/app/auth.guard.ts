import { CanActivateFn,Router } from '@angular/router';
import { AccountService } from './account.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService) // injecting my account service
  const router = inject(Router) // to handle navigation

  return accountService.checkAuthStatus().pipe(
    map(isLogged => {
      if (isLogged) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};


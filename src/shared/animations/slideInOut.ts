import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInOut = [
  trigger('slideInOut', [
    state(
      'in',
      style({
        transform: 'translateX(0)',
        opacity: 1,
      })
    ),
    transition('void => *', [
      style({ transform: 'translateX(50px)', opacity: 0 }),
      group([
        animate(
          '0.3s 0.1s ease',
          style({
            transform: 'translateX(0)',
          })
        ),
        animate(
          '0.3s ease',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
    transition('* => void', [
      group([
        animate(
          '0.3s ease',
          style({
            transform: 'translateX(50px)',
          })
        ),
        animate(
          '0.3s 0.2s ease',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ]),
];

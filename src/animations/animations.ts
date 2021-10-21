import { animate, state, style, transition, trigger } from "@angular/animations";

export const markedTrigger = trigger('markedState',[
  state(':enter',style({
    // transform: 'scale(1)'
  })),
  state(':leave',style({
    transform: 'scale(1.05)'
  })),
  transition(':enter => :leave',animate('200ms ease-in-out',style({
    transform: 'scale(1.10)'
  }))),
  transition(':leave => enter',animate('200ms ease-out'))
]);

export const fadeInFadeOutTrigger = trigger('fadeInFadeOut',[
  state(':enter',style({
    opaicty:1
  })),
  state(':leave',style({
    opacity:0
  })),
  transition(':enter',animate('200ms ease-in-out')),
  transition(':leave',animate('200ms ease-in-out'))
])

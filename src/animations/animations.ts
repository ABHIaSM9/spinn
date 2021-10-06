import { animate, state, style, transition, trigger } from "@angular/animations";

export const markedTrigger = trigger('markedState',[
  state('default',style({
    transform: 'scale(1)'
  })),
  state('marked',style({
    transform: 'scale(1.05)'
  })),
  transition('default => marked',animate('200ms ease-in-out',style({
    transform: 'scale(1.10)'
  }))),
  transition('marked => default',animate('200ms ease-out'))
]);

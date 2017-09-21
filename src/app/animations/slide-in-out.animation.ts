import {animate, state, style, transition, trigger} from '@angular/animations';

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
        state('*', style({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)'
        })),
        transition(':enter', [
            style({
                right: '-400%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }),
            animate('1.5s ease-in-out', style({
                right: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }))
        ]),

        transition(':leave', [

            animate('1.5s ease-in-out', style({
                right: '-400%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }))
        ])
    ]);

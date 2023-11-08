import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from "rxjs";
import { ActionTypes, GetHotelsAction, GetHotelsFailAction, GetHotelsSuccessAction } from "../Actions/hotels.actions";
import { HotelService } from "../Services/hotel.service";

@Injectable()
export class HotelEffects {

    constructor(
        private actions$: Actions,
        private service: HotelService
    ) { }

    getHotels$ = createEffect(() =>
        this.actions$.pipe(
            ofType<GetHotelsAction>(ActionTypes.GET_HOTELS),
            mergeMap(
                () => this.service.getHotels()
                    .pipe(
                        map(data => {
                            return new GetHotelsSuccessAction(data)
                        }),
                        catchError(error => of(new GetHotelsFailAction(error)))
                    )
            ),
        )
    )
}
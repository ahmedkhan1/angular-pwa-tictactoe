import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';

const appRoutes: Routes = [
    { path: '', component: BoardComponent }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
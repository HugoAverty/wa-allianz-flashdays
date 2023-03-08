/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {

    for (let i = 1; i < 12; i++) {
        WA.room.onEnterLayer('zone_overlay_' + i).subscribe(() => {
            WA.room.showLayer('overlay_room_' + i);
        })
        WA.room.onLeaveLayer('zone_overlay_' + i).subscribe(() => {
            WA.room.hideLayer('overlay_room_' + i);
        })
    }
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};

import { Schema, MapSchema, type } from "@colyseus/schema";
import { Player } from "./Player";

export class MyRoomState extends Schema {
    @type("string") mySynchronizedProperty: string = "Hello world";
    @type({ map: Player }) players = new MapSchema<Player>();
}

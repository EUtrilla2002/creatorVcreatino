/**
 *  Copyright 2018-2025 Felix Garcia Carballeira, Alejandro Calderon Mateos,
 *                      Diego Camarmas Alonso
 *
 *  This file is part of CREATOR.
 *
 *  CREATOR is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  CREATOR is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with CREATOR.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
import fs from "fs";
import * as hooks from "./arduino_functions.mts";
import { loadedCreatino } from "../core.mjs";

/*
 *  CREATOR instruction description API:
 *  CREATino executor module
 */

// -------Create hookmap from custom library file
const hookMap = new Map<number, () => void>();
export const ARDUINO = {
    check_arduino: (funcName: number, pc_state: number): boolean => {
        return check_arduino(funcName, pc_state);
    },
};

export function createHookMap() {
    // Obtener todos los nombres de funciones de hooks en orden
    const hookFunctions = Object.keys(hooks)
        .filter(k => k.startsWith("cr_"))
        .sort(); // Aseguramos que estén en orden alfabético si es necesario

    let i = 0;
    for (let addr = 0x0; addr <= 0x12c; addr += 4) {
        const funcName = hookFunctions[i];
        const func = (hooks as Record<string, () => void>)[funcName];

        hookMap.set(
            addr,
            func ??
                (() =>
                    console.log(`Function ${funcName ?? "unknown"} not found`)),
        );

        i++;
    }

    console.log("hookMap listo:", hookMap);
}

// ------- Identify arduino functions-----
export function check_arduino(funcName: number, pc_state: number): boolean {
    const key = Math.abs(Number(pc_state) + Number(funcName) - 4);
    if (hookMap.size === 0) {
        //await createHookMap(); ERROR
        createHookMap();
    }
    if (loadedCreatino == false) {
        console.log("Not CREATino library loaded");
        return false;
    }

    const func = hookMap.get(key);
    if (func) {
        console.log(
            `Executing Arduino function at address 0x${key.toString(16)}`,
        );
        func();
        return true;
    }

    console.log("Not Arduino");
    return false;
}

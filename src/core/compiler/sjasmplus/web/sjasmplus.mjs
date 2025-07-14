import {SjasmPlus} from "./wasm/sjasmplus.js";
import { main_memory } from "../../../core.mjs";
import { parseDebugSymbols, precomputeInstructions } from "../../compiler.mjs";
// eslint-disable-next-line max-lines-per-function
export async function assembly_compiler_sjasmplus(code) {
    // Re-initialize WASM module every time
    let sjasmModule = null;
    let result = {
        errorcode: "",
        token: "",
        type: "",
        update: "",
        status: "ko",
        binary: "",
        stdout: "",
    };
    try {
        // Load the sjasmplus WebAssembly module
        sjasmModule = await SjasmPlus({
            locateFile: (file) => {
                return new URL(`./wasm/${file}`, import.meta.url).href;
            }
        });

        if (!sjasmModule.FS) {
            throw new Error("File system not available in WebAssembly module");
        }

        // Always use fixed filenames
        const asmFilename = "program.asm";
        const binFilename = "program.bin";

        // Write source as-is
        sjasmModule.FS.writeFile(asmFilename, code);

        console.log("Assembly source written to:", asmFilename);

        // check if the file exists
        if (!sjasmModule.FS.analyzePath(asmFilename).exists) {
            console.error("Assembly source file not found:", asmFilename);
            result.status = "ko";
            result.update = "Assembly source file not found: " + asmFilename;
            return result;
        }

        // Run the assembler using callMain
        let output = "";

        const exitCode = sjasmModule.callMain([
            "--nologo",
            "--sym=program.sym",
            asmFilename,
            "--raw=" + binFilename,
        ]);

        // Due to a bug that occurs when compiling sjasmplus to wasm, it always exits with code 1, even for successful builds. 

        // Read the output file
        // If the assembler was successful, it should create a binary file
        // If it fails, it will not create the file, so we can check for that
        // If the assembler was successful, it should create a binary file
        if (!sjasmModule.FS.analyzePath(binFilename).exists) {
            console.error("Expected output file not found:", binFilename);
            result.status = "ko";
        }

        const binary = sjasmModule.FS.readFile(binFilename, { encoding: "binary" });

        // Debug symbols
        let parsedSymbols = null;
        if (sjasmModule.FS.analyzePath("./program.sym").exists) {
            const debugSymbols = sjasmModule.FS.readFile("./program.sym", { encoding: "utf8" });
            // Parse debug symbols if available
            parsedSymbols = parseDebugSymbols(debugSymbols);
        } else {
            console.error("Expected symbol file not found:", "./program.sym");
        }

        main_memory.loadROM(binary);
        precomputeInstructions(parsedSymbols);

        
  
        result.status = "ok";
        

    } catch (error) {
        console.error("Assembly error:", error);
    }

    return result;
}

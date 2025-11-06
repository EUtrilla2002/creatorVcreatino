


/*
 *  CREATOR instruction description API:
 *  CREATino functions module
 */
export function cr_initArduino() { console.log("cr_initArduino called"); }
export function cr_digitalRead() { console.log("cr_digitalRead called"); }
export function cr_pinMode() { console.log("cr_pinMode called"); }
export function cr_digitalWrite() { console.log("cr_digitalWrite called"); }
export function cr_analogRead() { console.log("cr_analogRead called"); }
export function cr_analogReadResolution() { console.log("cr_analogReadResolution called"); }
export function cr_analogWrite() { console.log("cr_analogWrite called"); }
export function cr_map() { console.log("cr_map called"); }
export function cr_constrain() { console.log("cr_constrain called"); }
export function cr_abs() { console.log("cr_abs called"); }
export function cr_max() { console.log("cr_max called"); }
export function cr_min() { console.log("cr_min called"); }
export function cr_pow() { console.log("cr_pow called"); }
export function cr_bit() { console.log("cr_bit called"); }
export function cr_bitClear() { console.log("cr_bitClear called"); }
export function cr_bitRead() { console.log("cr_bitRead called"); }
export function cr_bitSet() { console.log("cr_bitSet called"); }
export function cr_bitWrite() { console.log("cr_bitWrite called"); }
export function cr_highByte() { console.log("cr_highByte called"); }
export function cr_lowByte() { console.log("cr_lowByte called"); }
export function cr_sqrt() { console.log("cr_sqrt called"); }
export function cr_sq() { console.log("cr_sq called"); }
export function cr_cos() { console.log("cr_cos called"); }
export function cr_sin() { console.log("cr_sin called"); }
export function cr_tan() { console.log("cr_tan called"); }
export function cr_attachInterrupt() { console.log("cr_attachInterrupt called"); }
export function cr_detachInterrupt() { console.log("cr_detachInterrupt called"); }
export function cr_digitalPinToInterrupt() { console.log("cr_digitalPinToInterrupt called"); }
export function cr_interrupts() { console.log("cr_interrupts called"); }
export function cr_nointerrupts() { console.log("cr_nointerrupts called"); }
export function cr_isDigit() { console.log("cr_isDigit called"); }
export function cr_isAlpha() { console.log("cr_isAlpha called"); }
export function cr_isAlphaNumeric() { console.log("cr_isAlphaNumeric called"); }
export function cr_isAscii() { console.log("cr_isAscii called"); }
export function cr_isControl() { console.log("cr_isControl called"); }
export function cr_isPunct() { console.log("cr_isPunct called"); }
export function cr_isHexadecimalDigit() { console.log("cr_isHexadecimalDigit called"); }
export function cr_isUpperCase() { console.log("cr_isUpperCase called"); }
export function cr_isLowerCase() { console.log("cr_isLowerCase called"); }
export function cr_isPrintable() { console.log("cr_isPrintable called"); }
export function cr_isGraph() { console.log("cr_isGraph called"); }
export function cr_isSpace() { console.log("cr_isSpace called"); }
export function cr_isWhiteSpace() { console.log("cr_isWhiteSpace called"); }
export function cr_delay() { console.log("cr_delay called"); }
export function cr_delayMicroseconds() { console.log("cr_delayMicroseconds called"); }
export function cr_randomSeed() { console.log("cr_randomSeed called"); }
export function cr_random() { console.log("cr_random called"); }
export function cr_serial_available() { console.log("cr_serial_available called"); }
export function cr_serial_availableForWrite() { console.log("cr_serial_availableForWrite called"); }
export function cr_serial_begin() { console.log("cr_serial_begin called"); }
export function cr_serial_end() { console.log("cr_serial_end called"); }
export function cr_serial_find() { console.log("cr_serial_find called"); }
export function cr_serial_findUntil() { console.log("cr_serial_findUntil called"); }
export function cr_serial_flush() { console.log("cr_serial_flush called"); }
export function cr_serial_parseFloat() { console.log("cr_serial_parseFloat called"); }
export function cr_serial_parseInt() { console.log("cr_serial_parseInt called"); }
export function cr_serial_read() { console.log("cr_serial_read called"); }
export function cr_serial_readBytes() { console.log("cr_serial_readBytes called"); }
export function cr_serial_readBytesUntil() { console.log("cr_serial_readBytesUntil called"); }
export function cr_serial_write() { console.log("cr_serial_write called"); }
export function cr_serial_printf() { console.log("cr_serial_printf called"); }
export function cr_fabs() { console.log("cr_fabs called"); }
export function cr_fmax() { console.log("cr_fmax called"); }
export function cr_fmin() { console.log("cr_fmin called"); }
export function cr_sqrtf() { console.log("cr_sqrtf called"); }
export function cr_sqf() { console.log("cr_sqf called"); }
export function cr_tone() { console.log("cr_tone called"); }
export function cr_noTone() { console.log("cr_noTone called"); }
export function cr_pulseIn() { console.log("cr_pulseIn called"); }
export function cr_pulseInLong() { console.log("cr_pulseInLong called"); }
export function cr_shiftIn() { console.log("cr_shiftIn called"); }
export function cr_shiftOut() { console.log("cr_shiftOut called"); }

//Order
export const hookOrder = [
  "cr_initArduino",
  "cr_digitalRead",
  "cr_pinMode",
  "cr_digitalWrite",
  "cr_analogRead",
  "cr_analogReadResolution",
  "cr_analogWrite",
  "cr_map",
  "cr_constrain",
  "cr_abs",
  "cr_max",
  "cr_min",
  "cr_pow",
  "cr_bit",
  "cr_bitClear",
  "cr_bitRead",
  "cr_bitSet",
  "cr_bitWrite",
  "cr_highByte",
  "cr_lowByte",
  "cr_sqrt",
  "cr_sq",
  "cr_cos",
  "cr_sin",
  "cr_tan",
  "cr_attachInterrupt",
  "cr_detachInterrupt",
  "cr_digitalPinToInterrupt",
  "cr_pulseIn",          // ✅ en tu JSON pulseIn va aquí
  "cr_pulseInLong",
  "cr_shiftIn",
  "cr_shiftOut",
  "cr_interrupts",
  "cr_nointerrupts",
  "cr_isDigit",
  "cr_isAlpha",
  "cr_isAlphaNumeric",
  "cr_isAscii",
  "cr_isControl",
  "cr_isPunct",
  "cr_isHexadecimalDigit",
  "cr_isUpperCase",
  "cr_isLowerCase",
  "cr_isPrintable",
  "cr_isGraph",
  "cr_isSpace",
  "cr_isWhiteSpace",
  "cr_delay",
  "cr_delayMicroseconds",
  "cr_randomSeed",
  "cr_random",
  "cr_serial_available",
  "cr_serial_availableForWrite",
  "cr_serial_begin",
  "cr_serial_end",
  "cr_serial_find",
  "cr_serial_findUntil",
  "cr_serial_flush",
  "cr_serial_parseFloat",
  "cr_serial_parseInt",
  "cr_serial_read",
  "cr_serial_readBytes",
  "cr_serial_readBytesUntil",
  "cr_serial_write",
  "cr_serial_printf",
  "cr_fabs",
  "cr_fmax",
  "cr_fmin",
  "cr_sqrtf",
  "cr_sqf",
  "cr_tone",
  "cr_noTone"
];


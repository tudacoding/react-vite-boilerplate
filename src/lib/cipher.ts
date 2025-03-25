/* eslint-disable @typescript-eslint/no-explicit-any */
function cipher(salt: any) {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n: number) => `0${Number(n).toString(16)}`.substr(-2);
  const applySaltToChar = (code: any) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text: string) =>
    encodeURIComponent(text)
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
}

function decipher(salt: any) {
  const textToChars = (text: any) =>
    text.split("").map((c: string) => c.charCodeAt(0));
  const saltChars = textToChars(salt);
  const applySaltToChar = (code: any) =>
    saltChars.reduce((a: number, b: number) => a ^ b, code);
  return (encoded: any) =>
    decodeURIComponent(
      encoded
        .match(/.{1,2}/g)
        .map((hex: any) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode: any) => String.fromCharCode(charCode))
        .join("")
    );
}

export { cipher, decipher };

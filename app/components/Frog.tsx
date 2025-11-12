"use client";

export default function Frog() {
    const frog = `
    _    _
   (u)--(u)
   / ---- \\
   \\      /
  _/      \\_
 /  ||  ||  \\
(   \\\\  //   )
/M\\~/M\\/M\\~/M\\
`;

    const colourHTML = frog
        .split("\n")
        .map(line =>
            line.replace(/u/g, `<span class ="text-yellow-300">u</span>`)
        )
        .join("<br/>");

    return (
        <pre 
            className="font-mono whitespace-pre leading-tight text-[#377357]"
            dangerouslySetInnerHTML={{__html: colourHTML }}
        />
    );
}
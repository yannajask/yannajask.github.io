"use client";

export default function Lilypad() {
    const lilypad = 
`                 
       ____..        ...__
  _..-'                   \`-._ 
 .                            \`:.
:                                :
\`._                     __     .-'
   .__                \\   \`---'
      \`\`-...___________\\
`;

    return (
        <pre className="font-mono text-[#43b08a] whitespace-pre leading-tight">
            {lilypad}
        </pre>
    );
}
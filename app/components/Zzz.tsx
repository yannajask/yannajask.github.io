"use client";

import { useEffect, useState } from "react";

export default function Zzz() {
    const frames = [
        `
 z
Zz`,
        `
 z
zZ`,
        `
 Z
zz`
    ];

    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % frames.length);
        }, 500);
        return () => clearInterval(interval);
    });

    return (
        <pre className="font-mono text-[#396295] text-centre leading-tight whitespace-pre">
            {frames[frame]}
        </pre>
    );
}
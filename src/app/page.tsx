"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const ANIMALS = ['wolf', 'hawk', 'snake', 'tiger', 'lion', 'elephant', 'giraffe', 'zebra', 'hippo', 'rhino'];
const STORAGE_KEY = 'chat_username';

const generateRandomUsername = () => {
    const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
    return `anonymous-${word}-${nanoid(5)}`;
};

export default function Home() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const main = () => {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setUsername(stored);
                return;
            }

            const generated = generateRandomUsername();
            localStorage.setItem(STORAGE_KEY, generated);
            setUsername(generated);
        }

        main();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="max-w-md w-full space-y-8">
                <div className="border border-zinc-800 bg-zinc-900/50 backdrop-blur-md p-6">
                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="flex items-center text-zinc-500">
                                Your Identity
                            </label>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400 font-mono">
                                    {username}
                                </div>
                            </div>
                        </div>

                        <button className="
                            bg-zinc-100 text-black
                            w-full p-3
                            text-sm font-bold
                            hover:bg-zinc-50 hover:text-black
                            transition-colors mt-2
                            cursor-pointer
                            disabled:opacity-50"
                        >
                            CREATE SECURE ROOM
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

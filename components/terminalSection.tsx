"use client";
import React, { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import "@xterm/xterm/css/xterm.css";

export const TerminalSection = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const term = useRef<Terminal | null>(null);
  const inputBuffer = useRef<string>(''); // Track user input

  useEffect(() => {
    const setupTerminal = async () => {
      const { WebLinksAddon } = await import('@xterm/addon-web-links');

      term.current = new Terminal({
        cursorBlink: true,
        rows: 20,
        cols: 80,
        fontFamily: 'JetBrainsMono, Fira Code',
        fontSize: 12,
        theme: {
          background: '#2E3440',
          foreground: '#ECEFF4',
        },
      });

      const webLinksAddon = new WebLinksAddon();
      term.current.loadAddon(webLinksAddon);

      if (!terminalRef.current) {
        console.warn("Terminal container not found.");
        return;
      }

      term.current.open(terminalRef.current);
      term.current.focus();

      // Intro Message
      term.current.writeln('');
      term.current.writeln(' \x1b[1;96m👋  Hey there! I\'m Ojaswi Bhardwaj\x1b[0m 💻');
      term.current.writeln(' 📂  Welcome to my interactive portfolio terminal!');
      term.current.writeln(' 🧭  This space helps you explore who I am and what I do.');
      term.current.writeln(' \x1b[1;93m✨ Have fun exploring! Type \x1b[1;92mhelp\x1b[1;93m to begin!\x1b[0m 🚀');
      term.current.writeln('');
      term.current.writeln(' \x1b[1;97m🔗  Links:\x1b[0m');
      term.current.writeln('   🐙 GitHub   : \x1b[1;94mhttps://github.com/Ojaswi1234\x1b[0m');
      term.current.writeln('   💼 LinkedIn : \x1b[1;94mhttps://www.linkedin.com/in/ojaswi-bhardwaj-962393281/\x1b[0m');
      term.current.writeln('   📧 Email    : \x1b[1;94mojaswideep2020@gmail.com\x1b[0m');
      term.current.writeln('');

      const prompt = () => {
        term.current?.write('\r\n \x1b[93mOjaswi_$\x1b[0m > ');
      };

      prompt();

      term.current.onData((e) => {
        if (!term.current) return;

        switch (e) {
          case '\r': {
            const command = inputBuffer.current.trim();
            term.current.writeln('');

            if (command === '') {
              // No-op
            } else if (command === 'help') {
              term.current.writeln('\x1b[4mCommand     Description\x1b[0m');
              term.current.writeln('about       Shows information about the developer');
              term.current.writeln('sun         Prints a sun-themed message');
              term.current.writeln('moon        Prints a moon-themed message');
              term.current.writeln('linkedin    Opens LinkedIn profile link');
              term.current.writeln('github      Opens GitHub profile link');
              term.current.writeln('email       Shows contact email address');
              term.current.writeln('cls         Clears the terminal screen');
            } else if (command === 'cls') {
              term.current.clear();
            } else if (command === 'about') {
              term.current.writeln('');
              term.current.writeln(' \x1b[1;96m👋 Hey there! I\'m Ojaswi Bhardwaj\x1b[0m 💻');
              term.current.writeln(' 📂 Welcome to my interactive portfolio terminal!');
              term.current.writeln(' 🧭 This space helps you explore who I am and what I do.');
              term.current.writeln(' \x1b[1;93m✨ Have fun exploring! Type \x1b[1;92mhelp\x1b[1;93m to begin!\x1b[0m 🚀');
              term.current.writeln('');
              term.current.writeln(' \x1b[1;97m🔗  Links:\x1b[0m');
              term.current.writeln('   🐙 GitHub   : \x1b[1;94mhttps://github.com/Ojaswi1234\x1b[0m');
              term.current.writeln('   💼 LinkedIn : \x1b[1;94mhttps://www.linkedin.com/in/ojaswi-bhardwaj-962393281/\x1b[0m');
              term.current.writeln('   📧 Email    : \x1b[1;94mojaswideep2020@gmail.com\x1b[0m');
              term.current.writeln('');
            } else {
              term.current.writeln('\x1b[31mUnknown Command\x1b[0m');
            }

            inputBuffer.current = '';
            prompt();
            break;
          }

          case '\u007F': // Backspace
            if (inputBuffer.current.length > 0) {
              inputBuffer.current = inputBuffer.current.slice(0, -1);
              term.current.write('\b \b');
            }
            break;

          default:
            if (e >= ' ' && e <= '~') {
              inputBuffer.current += e;
              term.current.write(e);
            }
        }
      });
    };

    if (terminalRef.current) {
      setupTerminal();
    }

    return () => {
      term.current?.dispose();
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        width: '80%',
        height: '400px',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        opacity: "90%",
      }}
    />
  );
};

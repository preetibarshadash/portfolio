import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import typingSound from "../assets/typing.mp3";

export default function Main() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [shouldStartTyping, setShouldStartTyping] = useState(false);
  const timeoutRef = useRef(null);
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);
  const audioContextRef = useRef(null);

  const handleInteraction = async (event) => {
    if (hasInteracted.current) return;

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      }

      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume();
      }

      if (!audioRef.current) {
        const audio = new Audio(typingSound); 
        audio.volume = 0.2;
        audio.loop = true;
        audioRef.current = audio;
      }

      // Play audio immediately on first user gesture
      audioRef.current.play().catch(console.error);

      hasInteracted.current = true;
      setShouldStartTyping(true);
    } catch (error) {
      console.error("Audio setup error:", error);
      hasInteracted.current = true;
      setShouldStartTyping(true);
    }
  };

  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    let showTimeout;
    let hideTimeout;

    if (!isTyping) {
      // show scroll hint 3s after typing finishes
      showTimeout = setTimeout(() => {
        setShowScrollHint(true);
        // hide after 3s
        hideTimeout = setTimeout(() => {
          setShowScrollHint(false);
        }, 3000);
      }, 3000);
    }

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [isTyping]);

  useEffect(() => {
    const start = async (e) => {
      e.preventDefault();
      await handleInteraction(e);
    };

    document.addEventListener("pointerdown", start, { passive: false });

    return () => {
      document.removeEventListener("pointerdown", start);
    };
  }, []);

  const getGreeting = () => {
    const time = new Date().getHours();
    if (time < 12) return "Good Morning!";
    if (time < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  useEffect(() => {
    const greeting = getGreeting();
    const name = "I am Preetibarsha";
    const textToType = `${greeting},${name}`;
    let currentIndex = 0;
    let isMounted = true;

    const typeNextCharacter = () => {
      if (!isMounted) return;

      if (currentIndex < textToType.length) {
        if (currentIndex === 0 && audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(console.error);
        }

        const text = textToType.substring(0, currentIndex + 1);
        const parts = text.split(",");

        if (parts.length > 1) {
          setDisplayText(`${parts[0]}\n${parts[1]}`);
        } else {
          setDisplayText(parts[0]);
        }

        currentIndex++;
        timeoutRef.current = setTimeout(typeNextCharacter, 100);
      } else {
        setIsTyping(false);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }
    };

    if (shouldStartTyping) {
      typeNextCharacter();
    }

    return () => {
      isMounted = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [shouldStartTyping]);

  return (
    <main
      className="main"
      onClick={handleInteraction}
      style={{ cursor: "pointer" }}
    >
      <section className="intro">
        <div className="typewriter">
          {!shouldStartTyping ? (
            "Psst… wanna see what I’m really up to? Tap/click here!"
          ) : (
            <>
              {displayText.split("\n").map((line, index) => (
                <div key={index} className="typewriter-line">
                  {line}
                  {index === displayText.split("\n").length - 1 && (
                    <span
                      className={`cursor ${isTyping ? "typing" : "idle"}`}
                    ></span>
                  )}
                </div>
              ))}
              {!isTyping && (
                <div
                  className={`scroll-hint ${showScrollHint ? "show" : "hide"}`}
                >
                  Go on.... scroll down to see what I'm up to! 👀
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

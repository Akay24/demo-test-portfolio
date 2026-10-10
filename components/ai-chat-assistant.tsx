"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Bot, User, Loader2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "What is Abhijeet's primary tech stack?",
  "Tell me about CodeSentinel & Agentic QA",
  "What was his impact at Spotline, Inc.?",
  "Is Abhijeet open to new roles?",
];

export function AiChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Abhijeet's portfolio assistant powered by OpenRouter. Ask me anything about his backend systems, applied AI projects, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: query },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "I couldn't process that response. Feel free to ask again or reach out directly!",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Abhijeet specializes in Python (FastAPI), LangGraph, Playwright, Celery, and distributed systems. You can reach him directly at abhijeetmishra2410@gmail.com!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2 rounded-full border border-primary/40 bg-card/90 px-4 py-2.5 font-mono text-xs font-semibold text-foreground shadow-xl backdrop-blur-md transition-all hover:border-primary hover:bg-card hover:shadow-primary/20 active:scale-95"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Open AI Assistant"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <Sparkles size={14} className="text-primary transition-transform group-hover:rotate-12" />
          <span>Ask AI</span>
        </motion.button>
      </div>

      {/* Chat Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 flex h-[520px] w-[calc(100vw-2rem)] sm:w-[420px] flex-col overflow-hidden rounded-2xl border border-border/90 bg-card/95 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 bg-muted/40">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Bot size={15} />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-semibold text-foreground">
                    Abhijeet AI Copilot
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>OpenRouter Connected</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close AI Assistant"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.role === "assistant" && (
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary mt-0.5">
                      <Bot size={12} />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground font-medium rounded-br-xs"
                        : "border border-border/70 bg-background/80 text-foreground rounded-bl-xs shadow-xs"
                    }`}
                  >
                    {m.content}
                  </div>

                  {m.role === "user" && (
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground mt-0.5">
                      <User size={12} />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary mt-0.5">
                    <Bot size={12} />
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-border/70 bg-background/80 px-3.5 py-2 text-xs text-muted-foreground shadow-xs">
                    <Loader2 size={12} className="animate-spin text-primary" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="rounded-lg border border-border/60 bg-muted/40 px-2.5 py-1 text-[11px] font-mono text-muted-foreground transition-all hover:border-primary/40 hover:bg-muted hover:text-foreground text-left"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-border/80 p-3 bg-muted/20"
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, stack, experience..."
                  className="h-10 flex-1 rounded-xl border border-border bg-background px-3.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-all hover:opacity-90 disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

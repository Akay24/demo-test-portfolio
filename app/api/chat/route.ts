import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `You are the AI Assistant for Abhijeet Mishra's portfolio.
Abhijeet Mishra is a Backend Software Engineer specializing in Distributed Systems, Python Automation, and Applied AI.
Location: Bhubaneswar, Odisha, India
Email: abhijeetmishra2410@gmail.com
GitHub: https://github.com/Akay24
LinkedIn: https://www.linkedin.com/in/mishraabhijeet2410

Key Background:
- 2+ years of experience engineering scalable automation solutions, distributed backend microservices, and applied AI workflows.
- Core stack: Python 3.11+ (FastAPI, Pydantic), Node.js, Express, LangGraph, Playwright, Celery, Redis, PostgreSQL, MongoDB, Docker, AWS.
- Experience at Spotline, Inc.: Backend microservices, MongoDB query optimization (-23% P95 latency), Docker containers, Jenkins CI/CD pipelines.

Flagship Projects:
1. Agentic QA Automation Platform: Autonomous browser test runner with Playwright, dual-mode async execution (Celery/Redis or asyncio), and socket-level RFC 1918 SSRF guard.
2. CodeSentinel: LangGraph agentic code repair state machine with AST indexing, secret masking, and ephemeral isolated Docker sandboxes (--network none).
3. ReportKit: High-throughput document generation microservice with Jinja2 template versioning, idempotency keys (X-Idempotency-Key), and HMAC-SHA256 expiring tokens.
4. Synthetic API Monitor: High-frequency availability prober with microsecond socket timing waterfall (DNS, TCP, TLS, TTFB) and incident flap suppression.
5. GridLock CTF: In-browser UNIX terminal shell, Caesar/XOR crypto solvers, and Web Audio CRT feedback.
6. Solarium FM: Real-time NOAA solar telemetry sonification station driving a 4-voice ambient drone Web Audio graph.
7. PixelQuest: Starbyte: Playable 2D canvas game loop with delta-time physics and in-browser sprite editor.
8. Enterprise Microservices Platform: Spotline, Inc. cloud backend with Docker and AWS ECS.

Guidelines:
- Keep responses concise, direct, technical, and helpful (2-4 paragraphs or crisp bullet points max).
- Speak professionally on Abhijeet's behalf.
- If asked about availability, state that Abhijeet is open to high-impact Backend, Distributed Systems, and AI Engineering roles.`;

const MODELS = [
  "nvidia/nemotron-3-super-120b-a12b:free",
  "liquid/lfm-2.5-2.6b:free",
];

function getLocalFallback(userQuery: string): string {
  const q = userQuery.toLowerCase();
  if (q.includes("project") || q.includes("work")) {
    return "Abhijeet's flagship projects include CodeSentinel (LangGraph autonomous bug resolver), the Agentic QA Automation Platform (Playwright + SSRF guard), ReportKit (idempotent document generation microservice), and the Synthetic API Monitor. You can explore all of them interactively in the Selected Work section!";
  }
  if (q.includes("contact") || q.includes("email") || q.includes("hire")) {
    return "You can reach Abhijeet directly at abhijeetmishra2410@gmail.com or via LinkedIn at linkedin.com/in/mishraabhijeet2410. He is open to backend and distributed systems opportunities!";
  }
  if (q.includes("stack") || q.includes("skills") || q.includes("python")) {
    return "Abhijeet specializes in Python (FastAPI, Pydantic), Node.js/Express, LangGraph state machines, Celery/Redis task queues, Docker, and AWS. Check out the Skills & Stack section for the full breakdown.";
  }
  return "I'm Abhijeet's portfolio assistant. You can ask me about his backend microservices, applied AI work (LangGraph, Playwright), experience at Spotline, Inc., or how to get in touch!";
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages array" },
        { status: 400 }
      );
    }

    const latestUserMessage =
      messages[messages.length - 1]?.content || "";

    // If no API key configured, use instant local knowledge fallback
    if (!OPENROUTER_API_KEY) {
      return NextResponse.json({
        reply: getLocalFallback(latestUserMessage),
      });
    }

    const formattedMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.slice(-8),
    ];

    let reply = "";

    for (const model of MODELS) {
      try {
        const response = await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${OPENROUTER_API_KEY}`,
              "Content-Type": "application/json",
              "HTTP-Referer": "https://abhijeet-mishra.vercel.app",
              "X-Title": "Abhijeet Mishra Portfolio",
            },
            body: JSON.stringify({
              model,
              messages: formattedMessages,
              temperature: 0.6,
              max_tokens: 600,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const content = data.choices?.[0]?.message?.content;
          if (content) {
            reply = content.trim();
            break;
          }
        }
      } catch (err) {
        console.warn(`Model ${model} request error:`, err);
      }
    }

    if (!reply) {
      reply = getLocalFallback(latestUserMessage);
    }

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

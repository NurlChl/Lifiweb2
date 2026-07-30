import { NextRequest, NextResponse } from 'next/server'

// ponytail: simple SSE endpoint — just a keepalive heartbeat for demo
// When real SSE is needed, pipe from MongoDB change stream or in-memory event bus
export async function GET(req: NextRequest) {
  const type = new URL(req.url).searchParams.get('type') || 'heartbeat'

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`event: connected\ndata: {"type":"${type}"}\n\n`))

      const interval = setInterval(() => {
        controller.enqueue(encoder.encode(`: heartbeat\n\n`))
      }, 30000)

      req.signal.addEventListener('abort', () => {
        clearInterval(interval)
        controller.close()
      })
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}

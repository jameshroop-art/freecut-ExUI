export type LlamaRuntimeState = 'unavailable' | 'ready' | 'running' | 'error'

export type LlamaRuntimeMode = 'llm' | 'vlm' | 'nlm'

export interface LlamaRuntimeRequest {
  mode: LlamaRuntimeMode
  prompt: string
  contextMediaPath?: string
}

export interface LlamaRuntimeResult {
  ok: boolean
  reason?: string
}

export interface LlamaRuntimeBridge {
  state: LlamaRuntimeState
  isAvailable: boolean
  infer(request: LlamaRuntimeRequest): Promise<LlamaRuntimeResult>
}

export const llamaRuntimeBridge: LlamaRuntimeBridge = {
  state: 'unavailable',
  isAvailable: false,
  async infer(_request: LlamaRuntimeRequest): Promise<LlamaRuntimeResult> {
    return {
      ok: false,
      reason: 'Llama bridge is not wired yet; retain existing TTS/music flows.',
    }
  },
}

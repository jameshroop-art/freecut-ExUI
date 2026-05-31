export type SdRuntimeState = 'unavailable' | 'ready' | 'running' | 'error'

export interface SdRuntimeRequest {
  prompt: string
  sourceMediaPath?: string
  modelId?: string
}

export interface SdRuntimeResult {
  ok: boolean
  reason?: string
}

export interface SdRuntimeAdapter {
  state: SdRuntimeState
  isAvailable: boolean
  generate(request: SdRuntimeRequest): Promise<SdRuntimeResult>
}

export const sdRuntimeAdapter: SdRuntimeAdapter = {
  state: 'unavailable',
  isAvailable: false,
  async generate(_request: SdRuntimeRequest): Promise<SdRuntimeResult> {
    return {
      ok: false,
      reason: 'SD runtime adapter is not wired yet; use existing ai-panel flow.',
    }
  },
}

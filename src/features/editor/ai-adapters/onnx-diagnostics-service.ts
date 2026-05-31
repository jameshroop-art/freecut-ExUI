export type OnnxDiagnosticsState = 'degraded' | 'ready' | 'running' | 'error'

export type OnnxDiagnosticKind =
  | 'provider-diagnostics'
  | 'compatibility-check'
  | 'helper-ops-check'
  | 'runtime-health'

export interface OnnxDiagnosticEntry {
  kind: OnnxDiagnosticKind
  ok: boolean
  message: string
}

export interface OnnxDiagnosticsSnapshot {
  state: OnnxDiagnosticsState
  diagnostics: OnnxDiagnosticEntry[]
}

export interface OnnxDiagnosticsService {
  getSnapshot(): Promise<OnnxDiagnosticsSnapshot>
}

export const onnxDiagnosticsService: OnnxDiagnosticsService = {
  async getSnapshot(): Promise<OnnxDiagnosticsSnapshot> {
    return {
      state: 'degraded',
      diagnostics: [
        {
          kind: 'runtime-health',
          ok: false,
          message: 'ONNX diagnostics service is scaffolded but not wired.',
        },
      ],
    }
  },
}

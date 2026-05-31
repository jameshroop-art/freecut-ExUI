// VLC embedding wrapper — adapter boundary between per-tab AI review modules
// and the shared review-state contract.
//
// VLC is scoped to SD, Llama, and optional Audio Description embedded review
// only. It is not a replacement for the editor's primary preview runtime.
// When VLC is unavailable the wrapper falls back to the existing editor
// preview runtime without blocking media-library or timeline handoffs.

export type VlcEmbeddingReviewState = 'unavailable' | 'ready' | 'active' | 'error'

export interface VlcEmbeddingWrapper {
  /** Current lifecycle state of the VLC embedded review surface. */
  state: VlcEmbeddingReviewState
  /** True when VLC is available and can be used for embedded review. */
  isAvailable: boolean
  /**
   * Open an embedded VLC review surface for the given media URL.
   * Resolves false and falls back to the editor preview runtime when VLC
   * is unavailable or the launch fails.
   */
  openReview(mediaUrl: string): Promise<boolean>
  /** Close the active VLC review surface if one is open. */
  closeReview(): void
}

export const vlcEmbeddingWrapper: VlcEmbeddingWrapper = {
  state: 'unavailable',
  isAvailable: false,
  async openReview(_mediaUrl: string): Promise<boolean> {
    // VLC embedding lifecycle, codec assumptions, and cross-platform fallback
    // semantics are not yet formalized (see docs/ai-localhost-map/WRAPPER-RESEARCH.txt).
    // This stub always falls back to the existing editor preview runtime.
    return false
  },
  closeReview(): void {
    // No-op until VLC embedding lifecycle is resolved.
  },
}

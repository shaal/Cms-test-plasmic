import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-video-player')
export class VideoPlayer extends LitElement {
  @property({ type: String }) videoUrl = '';
  @property({ type: String }) posterUrl = '';
  @property({ type: String }) title = '';
  @property({ type: Boolean }) controls = true;
  @property({ type: Boolean }) autoplay = false;
  @property({ type: Boolean }) loop = false;
  @property({ type: String }) width = '100%';
  @property({ type: String }) maxWidth = '800px';

  static styles = css`
    :host {
      display: block;
    }

    .video-container {
      width: 100%;
      margin: 0 auto;
      padding: 2rem;
    }

    .video-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-align: center;
    }

    .video-wrapper {
      position: relative;
      width: 100%;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    video {
      width: 100%;
      height: auto;
      display: block;
    }
  `;

  render() {
    return html`
      <div class="video-container">
        ${this.title ? html`<div class="video-title">${this.title}</div>` : ''}
        <div class="video-wrapper" style="max-width: ${this.maxWidth}">
          <video
            src="${this.videoUrl}"
            poster="${this.posterUrl}"
            ?controls="${this.controls}"
            ?autoplay="${this.autoplay}"
            ?loop="${this.loop}"
            style="width: ${this.width}"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-video-player': VideoPlayer;
  }
}

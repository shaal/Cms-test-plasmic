import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-hero')
export class Hero extends LitElement {
  @property({ type: String }) title = 'Welcome to Our Site';
  @property({ type: String }) subtitle = 'Build amazing experiences with Astro and Plasmic';
  @property({ type: String }) ctaText = 'Get Started';
  @property({ type: String }) ctaUrl = '#';
  @property({ type: String }) backgroundImage = '';
  @property({ type: String }) backgroundColor = '#f5f5f5';
  @property({ type: String }) textColor = '#333333';

  static styles = css`
    :host {
      display: block;
    }

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 500px;
      padding: 4rem 2rem;
      text-align: center;
      background-size: cover;
      background-position: center;
    }

    .hero-content {
      max-width: 800px;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 3rem;
      border-radius: 8px;
    }

    h1 {
      font-size: 3rem;
      margin: 0 0 1rem 0;
      font-weight: bold;
    }

    p {
      font-size: 1.5rem;
      margin: 0 0 2rem 0;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1.125rem;
      transition: background-color 0.3s;
    }

    .cta-button:hover {
      background-color: #0056b3;
    }
  `;

  render() {
    const heroStyle = this.backgroundImage
      ? `background-image: url(${this.backgroundImage}); color: ${this.textColor}`
      : `background-color: ${this.backgroundColor}; color: ${this.textColor}`;

    return html`
      <div class="hero" style="${heroStyle}">
        <div class="hero-content">
          <h1>${this.title}</h1>
          <p>${this.subtitle}</p>
          <a href="${this.ctaUrl}" class="cta-button">${this.ctaText}</a>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-hero': Hero;
  }
}

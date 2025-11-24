import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-footer')
export class Footer extends LitElement {
  @property({ type: String }) copyright = '© 2024 Your Company';
  @property({ type: Array }) socialLinks: Array<{name: string, url: string}> = [];
  @property({ type: String }) backgroundColor = '#333333';
  @property({ type: String }) textColor = '#ffffff';

  static styles = css`
    :host {
      display: block;
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      margin-top: 4rem;
    }

    .social-links {
      display: flex;
      gap: 1.5rem;
    }

    .social-links a {
      text-decoration: none;
      transition: opacity 0.3s;
    }

    .social-links a:hover {
      opacity: 0.7;
    }
  `;

  render() {
    return html`
      <footer style="background-color: ${this.backgroundColor}; color: ${this.textColor}">
        <div class="copyright">${this.copyright}</div>
        <div class="social-links">
          ${this.socialLinks.map(link => html`
            <a href="${link.url}" target="_blank" style="color: ${this.textColor}">${link.name}</a>
          `)}
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': Footer;
  }
}

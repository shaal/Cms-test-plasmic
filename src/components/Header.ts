import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-header')
export class Header extends LitElement {
  @property({ type: String }) logo = 'Logo';
  @property({ type: Array }) menuItems: string[] = ['Home', 'About', 'Contact'];
  @property({ type: String }) backgroundColor = '#ffffff';
  @property({ type: String }) textColor = '#333333';

  static styles = css`
    :host {
      display: block;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    nav {
      display: flex;
      gap: 2rem;
    }

    nav a {
      text-decoration: none;
      transition: opacity 0.3s;
    }

    nav a:hover {
      opacity: 0.7;
    }
  `;

  render() {
    return html`
      <header style="background-color: ${this.backgroundColor}; color: ${this.textColor}">
        <div class="logo">${this.logo}</div>
        <nav>
          ${this.menuItems.map(item => html`
            <a href="#${item.toLowerCase()}" style="color: ${this.textColor}">${item}</a>
          `)}
        </nav>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': Header;
  }
}

const html = require('nanohtml');
// import {} from '../.storybook/utils'
export function PreviewTemplateDecorator(storyFn) {
  const storyInfo = storyFn();
  const tag = storyFn().example;
  const codeExample = html`<div>${tag}</div>`.innerHTML;
  const codeBlock = html`<code>${codeExample}</code>`
  window['hljs'].highlightBlock(codeBlock);
  const props = storyInfo.properties.map(prop => {
    return html`
    <li>
      <span class="name">${prop.name}</span>
      <span class="val">${prop.type}</span>
      <span class="note">${prop.note}</span>
    </li>
    `
  });
  return html`
  <div>
  <style>
    body {
      font-family:"Open Sans", Roboto, "Helvetica Neue", sans-serif;
    }
    header {
      margin: 32px 0 24px 0;
      text-align: center;
    }

    h1 {
      margin: 0;
      font-size: 32px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #46464b;
      clear: both;
      width: 100%;
      display: block;
    }
    .content {
      padding: 0 15px;
      line-height: 1.5;
    }
    small {
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      text-transform: uppercase;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: center;
      clear: both;
      width: 100%;
      display: block;
      color: #6f23ff;
    }
  .card sub {
    position: absolute;
    opacity: 0.4;
    top: 10px;
    left: 10px;
    text-transform: Capitalize;
    font-family: monospace;
  }
    .card {
      position: relative;
      text-align: center;
      padding: 48px 15px;
      margin: 15px;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 2px 8px 0 #00000051;
    }
    .card.dark {
      background: rgb(70, 70, 75);
    }
    .card.code {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      background: #f8f8f8;
    }
    .card.properties {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      border: 1px solid #00000018;
      padding-right: 0;
      padding-top: 0;
      padding-left: 0;
      list-style: none;
      text-align: left;
    }
    .properties li {
      padding: 15px;
      border-top: 1px solid #00000018;
      /* border-bottom: 1px solid #00000018; */
      display:flex;
    }
    .properties span {
      flex: 3;
    }
    .properties .val {
      color: salmon;
    }
    .properties li.header {
      padding: 15px;
      font-weight:bold;
      border: 0
    }
  </style>
  <header>
    <small>${storyInfo.subtitle}</small>
    <h1>${storyInfo.title}</h1>
  </header>
  <p class="content">${storyInfo.content}</p>
  <div class="card">
    <sub>live example</sub>
      ${tag}
    </div>
    <div class="card code">
     ${codeBlock}
   </div>
   <div>
     <header>
      <small> Properties </small>
     </header>
      <ul class="card properties">
        <li class="header">
           <span class="">Name</span>
           <span class="">Value</span>
           <span class="Notes">Notes</span>
        </li>
        ${props}
      </ul>
   </div>
</div>
  `
}
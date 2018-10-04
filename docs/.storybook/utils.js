import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

const html = require('nanohtml');

export function knobToggleAttr(tag, knob, attr) {
  if (knob) {
    tag.setAttribute(attr, true)
  } else {
    tag.removeAttribute(attr)
  }
}
export function bindEvent(tag, type){
  tag.addEventListener(type, (event) => action(type)(event));
}

export function toggle(check, attr) {
  return check ? attr : '';
}

export function themeSelect(selected) {
  return select('theme',
   {
    'ecosystem': 'ecosystem',
    'dark': 'dark',
    'project': 'project'
  },
  selected);
}
export function emphasisSelect(selected) {
  return select('emphasis',
  {
    'primary': 'primary',
    'secondary': 'secondary',
    'text': 'text'
  },
  selected);
}

export function getKnob({name, type, init}){
  switch (type) {
    case 'boolean':
      return toggle(boolean(name, false), name);
    case 'theme':
      return themeSelect(init);
    case 'emphasis':
      return emphasisSelect(init);
    default:
      return text(name, init);
  }
}

export function generateKnobs(properties){
  const knobs = {};
  properties.map(prop => {
    switch (prop.name) {
      case 'emphasis':
      case 'theme':
        knobs[prop.name] = getKnob({
          ...prop,
          type: prop.name
        });
      break;

      default:
        knobs[prop.name] = getKnob(prop);
      break;
    }
  });
  return knobs;
}
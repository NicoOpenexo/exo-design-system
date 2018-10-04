import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { generateKnobs } from '../.storybook/utils'
import { action } from '@storybook/addon-actions';
import { PreviewTemplateDecorator } from '../decorators/preview-template';
const html = require('nanohtml');



const buttonStories = storiesOf('Calls to Action', module);
buttonStories.addDecorator(withKnobs);
buttonStories.addDecorator(PreviewTemplateDecorator);
buttonStories.add('Button', () => {
    const propTypes = [
        {name:'theme', type: 'string', init: 'ecosystem', note: 'accepted values "ecosystem, dark, project"'},
        {name:'label', type: 'string', init: 'Hello World', note: ''},
        {name:'emphasis', type: 'string', init: 'primary', note: ''},
        {name:'disabled', type: 'boolean', init: 'false', note: ''},
        {name:'icon', type: 'string', init: '', note: 'any material icon'},
    ];
    const toggles = {
        ...generateKnobs(propTypes),
        onclick: action('click'),
        onmouseover: action('mouseover'),
    }
       return {
        title: `Button`,
        subtitle: `exo-button`,
        content: `A wiki is run using wiki software, otherwise known as a wiki engine. A wiki engine is a type of content management system, but it differs
        from most other such systems, including blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure,`,
        properties: propTypes,
        example: html`
            <exo-button
            theme="${toggles.theme}"
            emphasis="${toggles.emphasis}"
            ${toggles.disabled}
            onclick="${toggles.onclick}"
            onmouseover="${toggles.onmouseover}"
            />
            ${toggles.label}
            </exo-button>
        `
    }
});
buttonStories.add('Button with Icon', () => {
    const propTypes = [
        {name:'theme', type: 'string', init: 'ecosystem', note: 'accepted values "ecosystem, dark, project"'},
        {name:'label', type: 'string', init: 'Hello World', note: 'any string'},
        {name:'emphasis', type: 'string', init: 'primary', note: 'primary, secondary or text'},
        {name:'disabled', type: 'boolean', init: 'false', note: ''},
        {name:'icon', type: 'string', init: 'star', note: 'any material icon'},
    ];
    const toggles = {
        ...generateKnobs(propTypes),
        onclick: action('click'),
        onmouseover: action('mouseover'),
    }
    return {
        title: `Button with Icon`,
        subtitle: `exo-button`,
        content: `A wiki is run using wiki software, otherwise known as a wiki engine. A wiki engine is a type of content management system, but it differs
        from most other such systems, including blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure,`,
        properties: propTypes,
        example: html`
            <exo-button
            theme="${toggles.theme}"
            emphasis="${toggles.emphasis}"
            icon="${toggles.icon}"
            ${toggles.disabled}
            onclick="${toggles.onclick}"
            onmouseover="${toggles.onmouseover}"
            />
            ${toggles.label}
            </exo-button>
        `
    }
});




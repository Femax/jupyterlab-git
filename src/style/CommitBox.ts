import { style } from 'typestyle';

export const commitFormClass = style({
  display: 'flex',
  flexWrap: 'wrap',

  position: 'absolute',
  bottom: 0,
  left: 0,

  padding: '8px',
  paddingTop: '1em',

  alignItems: 'flex-start',

  borderTop: 'var(--jp-border-width) solid var(--jp-border-color2)'
});

export const commitSummaryClass = style({
  width: '100%',
  height: '1.5em',

  marginBottom: '1em',
  padding: 'var(--jp-code-padding)',

  outline: 'none',
  overflowX: 'auto',

  color: 'var(--jp-ui-font-color0)',
  fontSize: 'var(--jp-ui-font-size1)',
  fontWeight: 300,

  backgroundColor: 'var(--jp-layout-color1)',
  border: 'var(--jp-border-width) solid var(--jp-border-color2)',
  borderRadius: '3px'
});

export const commitDescriptionClass = style({
  width: '100%',

  marginBottom: '1em',
  padding: 'var(--jp-code-padding)',

  outline: 'none',
  overflowX: 'auto',
  resize: 'none',

  color: 'var(--jp-ui-font-color0)',
  fontSize: 'var(--jp-ui-font-size1)',
  fontWeight: 300,

  backgroundColor: 'var(--jp-layout-color1)',
  border: 'var(--jp-border-width) solid var(--jp-border-color2)',
  borderRadius: '3px',

  $nest: {
    '&:focus': {
      outline: 'none'
    },
    '&::placeholder': {
      color: 'var(--jp-ui-font-color3)'
    },
    '&::-webkit-input-placeholder': {
      color: 'var(--jp-ui-font-color3)'
    },
    '&::-moz-placeholder': {
      color: 'var(--jp-ui-font-color3)'
    },
    '&::-ms-input-placeholder': {
      color: 'var(--jp-ui-font-color3)'
    }
  }
});

export const commitButtonClass = style({
  width: '100%',
  height: '2em',

  color: 'white',
  fontSize: 'var(--jp-ui-font-size1)',

  backgroundColor: 'var(--jp-brand-color1)',
  border: '0',
  borderRadius: '3px'
});

export const commitButtonDisabledClass = style({
  backgroundColor: '#d3d3d3' // lightgrey
});

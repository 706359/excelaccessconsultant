# Button Color System

This color system is based on the command button properties specification.

## Core Color Values

All colors are defined in `tokens/core.css` as the source of truth:

### Default State
- **ForeColor**: `rgb(200, 0, 0)` - Red text/icon color
- **BackColor**: `rgb(255, 255, 255)` - White background
- **BorderColor**: `rgb(0, 0, 0)` - Black border

### Hover State
- **HoverForeColor**: `rgb(0, 0, 255)` - Blue text/icon color
- **HoverColor**: `rgb(255, 242, 0)` - Yellow background

### Pressed State
- **PressedForeColor**: `rgb(255, 255, 255)` - White text/icon color

## Usage

### In CSS (Recommended)
```css
.my-button {
  color: var(--button-default-foreground);
  background-color: var(--button-default-background);
  border: 1px solid var(--button-default-border);
}

.my-button:hover {
  color: var(--button-hover-foreground);
  background-color: var(--button-hover-background);
}
```

### In JavaScript/JSX
```jsx
<button 
  style={{
    color: 'var(--button-default-foreground)',
    backgroundColor: 'var(--button-default-background)',
    border: '1px solid var(--button-default-border)'
  }}
>
  Click Me
</button>
```

## Available Semantic Tokens

- `--button-default-foreground`
- `--button-default-background`
- `--button-default-border`
- `--button-hover-foreground`
- `--button-hover-background`
- `--button-hover-border`
- `--button-pressed-foreground`
- `--button-pressed-background`
- `--button-pressed-border`
- `--button-focus-foreground`
- `--button-focus-background`
- `--button-focus-border`
- `--button-focus-ring`
- `--button-disabled-foreground`
- `--button-disabled-background`
- `--button-disabled-border`

## Color Number Reference

- ForeColor: `200` (Color#)
- BackColor: `16777215` (Color#)
- BorderColor: `0` (Color#)
- HoverForeColor: `16711680` (Color#)
- HoverColor: `62207` (Color#)
- PressedForeColor: `16777215` (Color#)


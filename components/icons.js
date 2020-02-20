// Step 1: Each icon should be stored as an object of `path` and `viewBox`
const customIcons = {
    icon1: {
      path: <path fill="currentColor" d="./burger.svg" />,
      // If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
      viewBox: "0 0 40 40",
    },
    icon2: {
      path: (
        <g fill="currentColor">
          <path d="/burger.svg"/>
        </g>
      )
    }
  };
  
  
  // Step 2: Add the custom icon to the theme
  const customTheme = {
    ...theme,
    icons: {
      ...theme.icons,
      ...customIcons,
    }
  }

  
  export default customTheme;
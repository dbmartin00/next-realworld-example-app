import { useEffect } from 'react';

const useColorReplacement = () => {
  useEffect(() => {
    console.log('useColorReplacement');
    const targetColor = 'rgb(92, 184, 92)';
    const newColor = 'rgb(184, 92, 92)';

    const replaceColorsInStylesheets = () => {
      for (let i = 0; i < document.styleSheets.length; i++) {
        const sheet = document.styleSheets[i];
        if(sheet.href != null && sheet.href.endsWith("main.css")) {
          console.log('sheet', sheet);
          // Access all rules within the stylesheet
          try {
            const rules = sheet.rules || sheet.cssRules;
            let count = 0;
            let j = 0;
            for ( ; j < rules.length; j++) {
              try {
                const rule = rules[j];
                if (rule.style && rule.style.cssText.includes(targetColor)) {
                  rule.style.cssText = rule.style.cssText.replace(targetColor, newColor);
                  console.log('Color replaced in rule:', rule.selectorText);
                  // console.log(rule.style.cssText);
                  count++;
                }
              } catch (e) {
                // This will catch errors, typically due to CORS restrictions on stylesheets from different origins
                // console.error("Cannot access stylesheet rules due to cross-origin restrictions.", e);
              }
            }
            console.log('scanned ' + j + ' rules');
            console.log('color replaced in ' + count + ' rules');
          } catch (ex) {
            // swallow
          }
        }
      }
    };

    replaceColorsInStylesheets();

  }, []);
};

export default useColorReplacement;

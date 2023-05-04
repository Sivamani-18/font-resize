import React, { useState, useEffect } from 'react';

interface Props {
  id: string;
  min?: number;
  max?: number;
}

const FontResizer: React.FC<Props> = ({ id, min = 0, max = 8 }) => {
  const [current, setCurrent] = useState<number>(() => {
    const retrievedcurrent = localStorage.getItem('current');
    return retrievedcurrent ? Number(retrievedcurrent) : 0;
  });

  useEffect(() => {
    const handleRangeChange = (event: Event) => {
      localStorage.removeItem('id-changed');
      const change = Number((event.target as HTMLInputElement).value);
      const retrievedcurrent = localStorage.getItem('current') ?? '0';
      const inc = change - Number(retrievedcurrent);
      const dec = Number(retrievedcurrent) - change;
      const InDec = change > Number(retrievedcurrent) ? 'inc' : 'dec';

      document
        .querySelectorAll(
          'p,h1,h2,h3,h4,h5,h6,label,span,button,input,a,textarea,select,option,li,th,td'
        )
        .forEach((element) => {
          const fontSize = parseInt(
            window.getComputedStyle(element).getPropertyValue('font-size'),
            10
          );
          const newFontSize = InDec === 'inc' ? fontSize + inc : fontSize - dec;
          (element as HTMLElement).style.fontSize = `${newFontSize}px`;

          const computedLineHeight = window
            .getComputedStyle(element)
            .getPropertyValue('line-height');
          const lineHeight = parseInt(computedLineHeight, 10);

          if (isNaN(lineHeight)) {
            // handle case where line-height is not a valid number
            (element as HTMLElement).style.lineHeight = `${'normal'}`;
          }

          const newLineHeight =
            InDec === 'inc' ? lineHeight + inc : lineHeight - dec;
          (element as HTMLElement).style.lineHeight = `${newLineHeight}px`;

          // Store the new font size and line height in localStorage
          localStorage.setItem(
            element.tagName + '-' + Array.from(element.classList).join('-'),
            `${newFontSize}|${newLineHeight}`
          );
        });

      localStorage.setItem('current', String(change));
      setCurrent(change);
    };

    const resizeRange = document.getElementById(id) as HTMLInputElement | null;
    if (resizeRange) {
      resizeRange.value = String(current); // Set the initial value of the range input
      resizeRange.addEventListener('change', handleRangeChange);
    }

    // Retrieve the font sizes and line heights from localStorage and apply them to the affected elements
    document
      .querySelectorAll(
        'p,h1,h2,h3,h4,h5,h6,label,span,button,input,a,textarea,select,option,li,th,td'
      )
      .forEach((element) => {
        const fontKey =
          element.tagName + '-' + Array.from(element.classList).join('-');
        const fontData = localStorage.getItem(fontKey);
        if (fontData) {
          const [newFontSize, newLineHeight] = fontData.split('|');
          (element as HTMLElement).style.fontSize = `${newFontSize}px`;
          (element as HTMLElement).style.lineHeight = `${newLineHeight}px`;
        }
      });

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        const addedNodes = mutation.addedNodes;
        if (addedNodes && addedNodes.length > 0) {
          addedNodes.forEach((node) => {
            if ((node as HTMLElement).nodeType === Node.ELEMENT_NODE) {
              // Check if the added node requires font resizing
              const nodesToResize = (node as HTMLElement).querySelectorAll(
                'p,h1,h2,h3,h4,h5,h6,label,span,button,input,a,textarea,select,option,li,th,td'
              );
              if (nodesToResize.length > 0) {
                nodesToResize.forEach((element: any) => {
                  const fontKey =
                    element.tagName +
                    '-' +
                    Array.from(element.classList).join('-');
                  const fontData = localStorage.getItem(fontKey);
                  if (fontData) {
                    const [newFontSize, newLineHeight] = fontData.split('|');

                    element.style.fontSize = `${newFontSize}px`;
                    element.style.lineHeight = `${newLineHeight}px`;
                  } else {
                    const fontSize = parseInt(
                      window
                        .getComputedStyle(element)
                        .getPropertyValue('font-size'),
                      10
                    );

                    const computedLineHeight = window
                      .getComputedStyle(element)
                      .getPropertyValue('line-height');
                    const lineHeight = parseInt(computedLineHeight, 10);

                    if (isNaN(lineHeight)) {
                      // handle case where line-height is not a valid number
                      (element as HTMLElement).style.lineHeight = `${'normal'}`;
                    }
                    element.style.fontSize = `${fontSize + current}px`;
                    element.style.lineHeight = `${lineHeight + current}px`;
                    localStorage.setItem(
                      fontKey,
                      `${fontSize + current}|${lineHeight + current}`
                    );
                  }
                });
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      characterData: true,
      childList: true, // Add this line to listen for changes to child elements
    });

    return () => {
      if (resizeRange) {
        resizeRange.removeEventListener('change', handleRangeChange);
      }
      observer.disconnect();
    };
  }, [id, current]);

  return (
    <div>
      <input type='range' id={id} min={min} max={max} />
    </div>
  );
};

export default FontResizer;

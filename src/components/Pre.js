import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import rangeParser from 'parse-numeric-range'

export const styles = {
  borderRadius: '1rem',
  fontFamily: '"JetBrains Mono", "IBM Plex Mono", "Fira Code", "Input Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  overflow: 'hidden',
  overflowX: 'auto'
}

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return (index) => (lineNumbers.includes(index + 1))
  } else {
    return () => false
  }
}

export const Pre = ({ className, children, metastring }) => {
  const type = className ? className.split('-')[1] : false;
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return(
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={type}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return(
          <pre
            className={`${className} py-5 my-4`}
            style={{...style, ...styles}}
          >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            if (shouldHighlightLine(index)) {
              console.log('?', shouldHighlightLine(index))
              lineProps.className = `${lineProps.className} highlight-line`
            }
            return(
              <div {...lineProps}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
          </pre>
        )
      }}
    </Highlight>
  )
}

import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.baseFontSize = '16px'
fairyGatesTheme.overrideStyles = () => {
  return {
    a: {
      textShadow: 'none'
    }
  }
}

const typography = new Typography(fairyGatesTheme)

export default typography

import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

interface Props {
  color?: string
  size?: number
  borderSize?: number
}

export default styled.div.attrs({
  className: 'react-og-spinner'
})`
  border: ${(props: Props) => props.borderSize || 8}px solid rgba(0, 0, 0, 0.1);
  border-left: ${(props: Props) => props.borderSize || 8}px solid
    ${(props: Props) => props.color || 'black'};
  height: ${(props: Props) => props.size || '60'}px;
  width: ${(props: Props) => props.size || '60'}px;
  border-radius: 50px;
  animation: ${spin} 1s linear infinite;
`

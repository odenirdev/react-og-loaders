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
}

export default styled.div<Props>`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left: 8px solid ${(props) => props.color || 'black'};
  height: ${(props) => props.size || '60'}px;
  width: ${(props) => props.size || '60'}px;
  border-radius: 50px;
  animation: ${spin} 1s linear infinite;
`

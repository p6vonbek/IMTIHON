import styled from 'styled-components'
const Container = styled.button`
  border: none;
  cursor: pointer;
  padding: 7px 15px;
  width: ${({ width }) => width};
  height: ${({ height }) => `${height}px`};
  border-radius: ${(props) => (props.radius ? props.radius : '8px')};
  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${(props) =>
    props.background ? props.background : '#245ebd'};
`

export { Container }

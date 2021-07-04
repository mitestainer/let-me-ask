import styled from 'styled-components'

export const Switcher = styled.div`
  width: 54px;
  height: 26px;
  border: 1px solid #555;
  box-sizing: content-box;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 5px 0 0;
  border-radius: 15px;
  cursor: pointer;

  * {
    cursor: inherit;
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2px 3px 4px;
`

type SwitchProps = {
  isDarkOn: boolean
}

export const Switch = styled.div<SwitchProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: block;
  background-color: #fff;
  border: 1px solid #555;
  position: absolute;
  top: 3px;
  transform: ${({ isDarkOn }) => isDarkOn ? 'translateX(140%)' : 'translateX(0)'};
  transition: transform .4s;
`
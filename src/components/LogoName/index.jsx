import { LogoNameContainer } from "./style"

const LogoName = ({...rest}) => {
  return (
    <LogoNameContainer {...rest}>
      <div className='logo-title'>Happy<div className='logo-highlight'>Habits</div></div>
    </LogoNameContainer>
  )
}

export default LogoName
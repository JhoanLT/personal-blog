import React from "react"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 36px;
  padding-top: 24px;
`

const StyledSocialIcon = styled(SocialIcon)`
  margin: 4px;
  text-decoration: none;
  box-shadow: 0 0 0 0;
`

const NavBar = () => (
  <StyledDiv>
    <div>
      <StyledSocialIcon
        network="linkedin"
        url="https://www.linkedin.com/in/jhoan-l%C3%B3pez-b380ba124/"
      />
      <StyledSocialIcon network="github" url="https://github.com/JhoanLT" />
      <StyledSocialIcon network="twitter" url="https://twitter.com/jhoanlt19" />
      <StyledSocialIcon
        network="instagram"
        url="https://www.instagram.com/jholodev/"
      />
    </div>
  </StyledDiv>
)

export default NavBar

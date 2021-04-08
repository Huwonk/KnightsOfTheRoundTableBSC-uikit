import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Knights DeFi home page">
          <img
            src="https://ipfs.io/ipfs/QmPDPkJHr65KxEDWEE725CuvK5ytfWXbx1fpAKiWf8PNoR?filename=logo.svg"
            alt="Knights DeFi Logo"
            className="mobile-icon"
          />
          <img
            src="https://ipfs.io/ipfs/QmPyhbCeCyRLKuEkkLKkjAT8zhK2DPaKHJ35sNH3UdzM9V?filename=banner.svg"
            alt="Knights DeFi Logo"
            className="desktop-icon"
          />
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Knights DeFi home page">
          <img
            src="https://ipfs.io/ipfs/QmPDPkJHr65KxEDWEE725CuvK5ytfWXbx1fpAKiWf8PNoR?filename=logo.svg"
            alt="Knights DeFi Logo"
            className="mobile-icon"
          />
          <img
            src="https://ipfs.io/ipfs/QmPyhbCeCyRLKuEkkLKkjAT8zhK2DPaKHJ35sNH3UdzM9V?filename=banner.svg"
            alt="Knights DeFi Logo"
            className="desktop-icon"
          />
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;

import styled from "styled-components";
import tw from "tailwind.macro";

const StyledHeader = styled.nav.attrs({
  className: "flex justify-between max-width bg-teal-400 h-12 items-center",
})`
  & {
    span {
      ${tw` text-blue-800`}
    }
  }
`;

export default StyledHeader;

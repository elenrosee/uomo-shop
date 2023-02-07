import styled from "styled-components";

export const SvgWrapper = styled.div`
  position: relative;
  width: 22px;

  &::before {
    content: ${({ shoppingCounter }) =>
      shoppingCounter ? `"${shoppingCounter}"` : `"0"`};

    display: inline-block;
    font-size: small;
    color: white;
    background-color: #b9a16b;

    padding: 1px;
    min-width: 16px;
    height: 16px;
    border-radius: 20px;

    position: absolute;
    left: 8px;
    bottom: -3px;
  }
`;

export const ShoppingBagSvg = ({ shoppingCounter }) => {
  return (
    <SvgWrapper shoppingCounter={shoppingCounter}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M17.6562 4.6875H15.2755C14.9652 2.05164 12.7179 0 10 0C7.28215 0 5.0348 2.05164 4.72445 4.6875H2.34375C1.91227 4.6875 1.5625 5.03727 1.5625 5.46875V19.2188C1.5625 19.6502 1.91227 20 2.34375 20H17.6562C18.0877 20 18.4375 19.6502 18.4375 19.2188V5.46875C18.4375 5.03727 18.0877 4.6875 17.6562 4.6875ZM10 1.5625C11.8548 1.5625 13.3992 2.91621 13.6976 4.6875H6.30238C6.60082 2.91621 8.14516 1.5625 10 1.5625ZM16.875 18.4375H3.125V6.25H4.6875V8.59375C4.6875 9.02523 5.03727 9.375 5.46875 9.375C5.90023 9.375 6.25 9.02523 6.25 8.59375V6.25H13.75V8.59375C13.75 9.02523 14.0998 9.375 14.5312 9.375C14.9627 9.375 15.3125 9.02523 15.3125 8.59375V6.25H16.875V18.4375Z"
          fill="#222222"
        />
      </svg>
    </SvgWrapper>
  );
};

import styled, { css } from 'styled-components'

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${(props) => props.theme.colors.red};

  ${({ isMenuOpen }) => {
    return isMenuOpen
      ? css`
          width: 16.3rem;
        `
      : css`
          width: 7.75rem;
        `
  }}

  transition: width 0.3s;

  padding: 2rem 0;
  overflow: hidden; //remove barra de rolagem
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: none;
    width: 100%;
    border: none;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex; // Irei 'ordenar' para coluna com flex-direction.
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        svg {
          fill: ${({ theme }) => theme.colors.white};
          width: 4rem;
          height: 4rem;
          transition: fill 0.3s;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &:hover {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.yellow};
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }
          svg {
            fill: ${(props) => props.theme.colors.yellow};
          }

          span {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }

        &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.yellow};
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }

          svg {
            fill: ${(props) => props.theme.colors.yellow};
          }

          span {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    padding: 0 0;
    overflow-y: auto;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0rem;

          svg {
            width: 3.25rem;
            height: 3.25rem;
          }

          span {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }

          &:hover {
            &::after {
              display: none;
            }
            &::before {
              content: '';
              position: absolute;
              width: 100%;
              height: 3px;
              bottom: -5px;
              visibility: visible;
              background-color: ${({ theme }) => theme.colors.yellow};
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
              -webkit-transition: all 0.3s ease-in-out 0s;
              transition: all 0.3s ease-in-out 0s;
              border-radius: 10px 10px 0px 0px;
            }
          }
        }
      }
    }
  }
`

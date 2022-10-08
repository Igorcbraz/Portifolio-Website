import { string, bool } from 'prop-types'

import './logos.css'

export function Logos({
  isBehance,
  behanceColor,
  isGithub,
  githubColor,
  isInstagram,
  instagramColor,
  isLinkedin,
  linkedinColor,
  isQuestion,
  questionColor,
  isClose,
  closeColor,
}) {
  return (
    <>
      { isBehance && (
        <a href='https://www.behance.net/igorcbraz' target='_blank' rel='noreferrer'>
          <svg id='behance' width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M11.9297 13.6038C12.221 13.3929 12.3616 13.0446 12.3616 12.5658C12.3717 12.3382 12.3248 12.1138 12.2243 11.9096C12.1339 11.7455 12 11.6083 11.8359 11.5112C11.6658 11.408 11.4769 11.3397 11.2801 11.3103C11.0658 11.2701 10.8482 11.25 10.6339 11.2533H8.28013V13.9219H10.8281C11.2667 13.9252 11.6384 13.8181 11.9297 13.6038ZM12.3248 16.0145C11.9967 15.7634 11.558 15.6395 11.0123 15.6395H8.27344V18.7868H10.9587C11.2098 18.7868 11.4408 18.7634 11.6652 18.7165C11.8774 18.675 12.0797 18.5932 12.2612 18.4754C12.4319 18.365 12.5692 18.2143 12.673 18.0201C12.7734 17.8259 12.8237 17.5781 12.8237 17.2801C12.8237 16.6875 12.6562 16.269 12.3248 16.0145ZM15 0C6.71652 0 0 6.71652 0 15C0 23.2835 6.71652 30 15 30C23.2835 30 30 23.2835 30 15C30 6.71652 23.2835 0 15 0ZM17.8962 9.60603H22.5301V10.7344H17.8962V9.60603ZM15 18.9107C14.7833 19.3221 14.4738 19.6775 14.096 19.9487C13.7009 20.2232 13.2623 20.4241 12.7969 20.5413C12.31 20.6718 11.8077 20.736 11.3036 20.7321H5.75893V9.31138H11.1496C11.6953 9.31138 12.1908 9.36161 12.6429 9.45536C13.0915 9.54911 13.4732 9.70982 13.7946 9.92745C14.1127 10.1451 14.3638 10.4364 14.5413 10.798C14.7154 11.1562 14.8058 11.6049 14.8058 12.1373C14.8058 12.7132 14.6752 13.1886 14.4141 13.5737C14.1496 13.9587 13.7679 14.2701 13.2489 14.5145C13.9554 14.7154 14.4743 15.0737 14.8158 15.5759C15.1641 16.0848 15.3348 16.6942 15.3348 17.4107C15.3348 17.9933 15.2243 18.4922 15 18.9107ZM24.3348 17.1429H18.3616C18.3616 17.7924 18.5859 18.4152 18.9241 18.75C19.2656 19.0815 19.7545 19.2489 20.394 19.2489C20.856 19.2489 21.2478 19.1317 21.5826 18.9007C21.9141 18.6696 22.115 18.4252 22.1886 18.1708H24.1908C23.8694 19.1652 23.3806 19.875 22.7176 20.3036C22.0614 20.7321 21.2578 20.9464 20.3237 20.9464C19.6708 20.9464 19.0848 20.8393 18.5592 20.635C18.0536 20.4375 17.5982 20.1362 17.2232 19.7478C16.8535 19.3489 16.5677 18.8798 16.3828 18.3683C16.1786 17.8025 16.0781 17.2065 16.0848 16.6071C16.0848 15.9877 16.1886 15.4118 16.3895 14.8761C16.7746 13.8348 17.5748 13.0011 18.596 12.5692C19.1417 12.3415 19.7277 12.2277 20.3203 12.2344C21.0234 12.2344 21.6328 12.3683 22.1618 12.6429C22.6711 12.905 23.1133 13.2808 23.4542 13.7411C23.7924 14.1998 24.0301 14.7221 24.1808 15.3114C24.3248 15.8906 24.375 16.5 24.3348 17.1429ZM20.25 13.942C19.8884 13.942 19.5837 14.0056 19.3493 14.1295C19.115 14.2533 18.9208 14.4074 18.7734 14.5848C18.6331 14.7562 18.5294 14.9544 18.4687 15.1674C18.4152 15.3449 18.3783 15.5257 18.365 15.7098H22.0647C22.0112 15.1306 21.8103 14.702 21.5424 14.4007C21.2612 14.1027 20.8092 13.942 20.25 13.942Z' fill={behanceColor || '#f3f3f3'} />
          </svg>
        </a>
      )}
      { isGithub && (
        <a href='https://github.com/Igorcbraz' target='_blank' rel='noreferrer'>
          <svg id='github' width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd' d='M15 6.10352e-05C6.7125 6.10352e-05 0 6.88235 0 15.3795C0 22.1849 4.29375 27.9329 10.2563 29.9707C11.0063 30.1053 11.2875 29.6439 11.2875 29.2402C11.2875 28.8749 11.2688 27.6638 11.2688 26.3757C7.5 27.087 6.525 25.4338 6.225 24.5687C6.05625 24.1265 5.325 22.7616 4.6875 22.3963C4.1625 22.108 3.4125 21.3967 4.66875 21.3774C5.85 21.3582 6.69375 22.4924 6.975 22.9538C8.325 25.28 10.4812 24.6263 11.3438 24.2226C11.475 23.223 11.8688 22.5501 12.3 22.1656C8.9625 21.7811 5.475 20.4547 5.475 14.572C5.475 12.8995 6.05625 11.5154 7.0125 10.4388C6.8625 10.0543 6.3375 8.47796 7.1625 6.36329C7.1625 6.36329 8.41875 5.95958 11.2875 7.93968C12.4875 7.59364 13.7625 7.42063 15.0375 7.42063C16.3125 7.42063 17.5875 7.59364 18.7875 7.93968C21.6563 5.94036 22.9125 6.36329 22.9125 6.36329C23.7375 8.47796 23.2125 10.0543 23.0625 10.4388C24.0187 11.5154 24.6 12.8803 24.6 14.572C24.6 20.4739 21.0938 21.7811 17.7563 22.1656C18.3 22.6462 18.7688 23.569 18.7688 25.0108C18.7688 27.0678 18.75 28.7211 18.75 29.2402C18.75 29.6439 19.0312 30.1245 19.7812 29.9707C22.759 28.9399 25.3465 26.9777 27.1796 24.3602C29.0127 21.7428 29.9991 18.6018 30 15.3795C30 6.88235 23.2875 6.10352e-05 15 6.10352e-05Z' fill={githubColor || '#f3f3f3'} />
          </svg>
        </a>
      )}
      { isInstagram && (
        <a href='https://www.instagram.com/igorcbrazdesign/' target='_blank' rel='noreferrer'>
          <svg id='instagram' width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.996 9.99787C12.2417 9.99787 9.99393 12.2456 9.99393 15C9.99393 17.7544 12.2417 20.0021 14.996 20.0021C17.7503 20.0021 19.998 17.7544 19.998 15C19.998 12.2456 17.7503 9.99787 14.996 9.99787ZM29.9983 15C29.9983 12.9286 30.0171 10.876 29.9008 8.80832C29.7844 6.40669 29.2366 4.27525 27.4804 2.51907C25.7205 0.759128 23.5929 0.215011 21.1913 0.098682C19.1199 -0.0176466 17.0673 0.00111617 14.9997 0.00111617C12.9284 0.00111617 10.8758 -0.0176466 8.80815 0.098682C6.40658 0.215011 4.27517 0.762881 2.51902 2.51907C0.759114 4.27901 0.215007 6.40669 0.0986802 8.80832C-0.0176462 10.8797 0.00111615 12.9324 0.00111615 15C0.00111615 17.0676 -0.0176462 19.124 0.0986802 21.1917C0.215007 23.5933 0.762867 25.7247 2.51902 27.4809C4.27893 29.2409 6.40658 29.785 8.80815 29.9013C10.8795 30.0176 12.9321 29.9989 14.9997 29.9989C17.0711 29.9989 19.1237 30.0176 21.1913 29.9013C23.5929 29.785 25.7243 29.2371 27.4804 27.4809C29.2403 25.721 29.7844 23.5933 29.9008 21.1917C30.0208 19.124 29.9983 17.0714 29.9983 15V15ZM14.996 22.6964C10.7369 22.6964 7.29966 19.2591 7.29966 15C7.29966 10.7409 10.7369 7.30355 14.996 7.30355C19.255 7.30355 22.6923 10.7409 22.6923 15C22.6923 19.2591 19.255 22.6964 14.996 22.6964ZM23.0075 8.7858C22.0131 8.7858 21.2101 7.98276 21.2101 6.98834C21.2101 5.99392 22.0131 5.19087 23.0075 5.19087C24.0019 5.19087 24.8049 5.99392 24.8049 6.98834C24.8052 7.22447 24.7589 7.45834 24.6687 7.67655C24.5785 7.89476 24.4461 8.09303 24.2791 8.26C24.1122 8.42697 23.9139 8.55936 23.6957 8.64958C23.4775 8.73981 23.2436 8.7861 23.0075 8.7858V8.7858Z' fill={instagramColor || '#f3f3f3'} />
          </svg>
        </a>
      )}
      { isLinkedin && (
        <a href='https://www.linkedin.com/in/igor-costa-braz-2ab822208/' target='_blank' rel='noreferrer'>
          <svg id='linkedin' width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd' d='M3.7099e-07 2.50637C3.7099e-07 1.84164 0.264063 1.20413 0.734097 0.7341C1.20413 0.264066 1.84163 3.34134e-06 2.50636 3.34134e-06H27.4909C27.8203 -0.000534684 28.1466 0.0639073 28.4511 0.18964C28.7556 0.315372 29.0323 0.499926 29.2653 0.732735C29.4984 0.965543 29.6833 1.24204 29.8093 1.54638C29.9354 1.85073 30.0002 2.17695 30 2.50637V27.4909C30.0004 27.8204 29.9357 28.1467 29.8099 28.4512C29.684 28.7557 29.4993 29.0324 29.2664 29.2654C29.0335 29.4985 28.7569 29.6833 28.4525 29.8093C28.148 29.9354 27.8218 30.0002 27.4923 30H2.50636C2.17711 30 1.85108 29.9351 1.5469 29.8091C1.24273 29.683 0.96637 29.4983 0.733615 29.2654C0.50086 29.0325 0.316271 28.7561 0.190394 28.4518C0.0645181 28.1476 -0.000178767 27.8215 3.7099e-07 27.4923V2.50637ZM11.8745 11.4382H15.9368V13.4782C16.5232 12.3055 18.0232 11.25 20.2773 11.25C24.5986 11.25 25.6227 13.5859 25.6227 17.8718V25.8109H21.2495V18.8482C21.2495 16.4073 20.6632 15.03 19.1741 15.03C17.1082 15.03 16.2491 16.515 16.2491 18.8482V25.8109H11.8745V11.4382ZM4.37455 25.6241H8.74909V11.25H4.37455V25.6227V25.6241ZM9.375 6.56182C9.38325 6.93637 9.3166 7.3088 9.17896 7.65725C9.04133 8.0057 8.83548 8.32314 8.5735 8.59096C8.31152 8.85877 7.99868 9.07156 7.65335 9.21683C7.30802 9.3621 6.93714 9.43694 6.5625 9.43694C6.18786 9.43694 5.81698 9.3621 5.47165 9.21683C5.12632 9.07156 4.81348 8.85877 4.5515 8.59096C4.28952 8.32314 4.08367 8.0057 3.94604 7.65725C3.8084 7.3088 3.74175 6.93637 3.75 6.56182C3.76619 5.82662 4.06962 5.12699 4.5953 4.61276C5.12098 4.09852 5.82712 3.81057 6.5625 3.81057C7.29788 3.81057 8.00402 4.09852 8.5297 4.61276C9.05538 5.12699 9.35881 5.82662 9.375 6.56182Z' fill={linkedinColor || '#f3f3f3'} />
          </svg>
        </a>
      )}
      { isQuestion && (
        <svg width='15' height='15' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M11 0C11.3647 0 11.7144 0.144866 11.9723 0.402728C12.2301 0.660591 12.375 1.01033 12.375 1.375V9.625H20.625C20.9897 9.625 21.3394 9.76987 21.5973 10.0277C21.8551 10.2856 22 10.6353 22 11C22 11.3647 21.8551 11.7144 21.5973 11.9723C21.3394 12.2301 20.9897 12.375 20.625 12.375H12.375V20.625C12.375 20.9897 12.2301 21.3394 11.9723 21.5973C11.7144 21.8551 11.3647 22 11 22C10.6353 22 10.2856 21.8551 10.0277 21.5973C9.76987 21.3394 9.625 20.9897 9.625 20.625V12.375H1.375C1.01033 12.375 0.660591 12.2301 0.402728 11.9723C0.144866 11.7144 0 11.3647 0 11C0 10.6353 0.144866 10.2856 0.402728 10.0277C0.660591 9.76987 1.01033 9.625 1.375 9.625H9.625V1.375C9.625 1.01033 9.76987 0.660591 10.0277 0.402728C10.2856 0.144866 10.6353 0 11 0V0Z' fill={questionColor || '#F3F3F3'} />
        </svg>
      )}
      { isClose && (
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 329.26933 329'>
          <path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' fill={closeColor || '#F3F3F3'} />
        </svg>
      )}
    </>
  )
}

Logos.propTypes = {
  isGithub: bool,
  isLinkedin: bool,
  isQuestion: bool,
  isBehance: bool,
  isClose: bool,
  isInstagram: bool,

  instagramColor: string,
  behanceColor: string,
  githubColor: string,
  linkedinColor: string,
  questionColor: string,
  closeColor: string,
}


const Footer = () => {
  return (
    <footer className="   text-center dark:bg-neutral-600 dark:text-neutral-200 lg:text-left bg-slate-100" >
      <div className="flex flex-col md:flex-row gap-8 md:mx-8 ">
        <div className=" col-1 mt-8 mx-4">
          <div className=" text-2xl font-poppins ">
            <h2>your Logo</h2>
            <p>Shadbox</p>
          </div>
          <div className="">
            <h6
              className="mb-4 flex mt-4 items-center justify-center font-semibold uppercase md:justify-start" style={{color:'#2563EB'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4">
                <path
                  d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              About Shadbox
            </h6>
            <p className="text-justify w-80">
              we have the “Get things executed” lifestyle at our place of work.
              There are not any excuses, no if’s or however’s in our dictionary.
            </p>
          </div>

        </div>
        <div className="mx-6 py-4 md:py-16 text-center md:text-left ">
          <div className="grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {/* <!-- Products section --> */}
            <div className="">
              <h6
                className=" flex justify-center font-semibold uppercase md:justify-start " style={{color:'#2563EB'}}>
                Products
              </h6>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200"
                >Ruby On Rails</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200"
                >React</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200"
                >Java</a>
              </p>
              <p>
                <a className="text-neutral-600 dark:text-neutral-200"
                >Python</a>
              </p>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start" style={{color:'#2563EB'}}>
                Useful links
              </h6>
              <p className="mb-4">
                <a href="/blog" className="text-neutral-600 hover:text-blue-500 underline dark:text-neutral-200"
                >Blog</a>
              </p>
              <p className="mb-4">
                <a  href=" /contact" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 underline"
                >Contact Us</a>
              </p>
              <p className="mb-4">
                <a href="/about"className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 underline"
                >About Us</a>
              </p>
              <p>
                <a href="/privacypolicy" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 underline"
                >Privacy Policy</a>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div className="w-80">
              <h6
                className="  flex justify-center  font-semibold uppercase md:justify-start " style={{color:'#2563EB'}}  >
                Contact
              </h6>
              <p className="mb-4  mr-4 flex  lg:text-justify   md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-8 " width={"100"} height={"50"}>
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              Awasti chowk, Jafar Nagar, New Mankapur, Nagpur, Maharastra 4430030
              </p>
              <p className="mb-4 mr-12 flex  md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                shadbox@support.com
              </p>
              <p className="mb-4 mr-24 flex   md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd" />
                </svg>
                + 01 234 567 88
              </p>
              <p className="flex mr-24   md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                    clipRule="evenodd" />
                </svg>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </div>



    

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-2 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >Shadbox</a>
      </div>
    </footer>
  )
}

export default Footer
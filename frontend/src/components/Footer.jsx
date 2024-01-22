import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 text-zinc-800 rounded-lg'>Rushton's</span>
                        Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://metropolis-k549.onrender.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                E-Commerce Website
                            </Footer.Link>
                            <Footer.Link
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Rushton's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Me'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://metropolis-k549.onrender.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Github
                            </Footer.Link>
                            <Footer.Link
                                href='https://www.linkedin.com/in/michael-rushton-65316b280/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                LinkedIn
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='#'
                            >
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                            >
                                Terms & Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Rushton's Blog" year={new Date().getFullYear()} />
                <div className="flex gap-6 sm:mt-2 mt-4 sm:justify-center">
                    <Footer.Icon href='#' icon={BsFacebook} />
                    <Footer.Icon href='#' icon={BsInstagram} />
                    <Footer.Icon href='#' icon={BsTwitter} />
                    <Footer.Icon href='#' icon={BsGithub} />
                    <Footer.Icon href='#' icon={BsDribbble} />
                </div>
            </div>
        </div>
    </Footer>
  )
}

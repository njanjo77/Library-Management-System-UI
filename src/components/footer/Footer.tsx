

export const Footer = () => {
  return (
    <>
    <footer className="footer sm:footer-horizontal bg-red-300 text-neutral-content grid-rows-2 p-10 border-t-2 border-blue-400 flex-col gap-4">
                <nav className="flex-col-reverse p-4">
                    <h6 className="footer-title text-3xl text-blue-500">Services</h6>
                    <ul className="flex-row gap-2">
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Printing</a>
                    <a className="link link-hover">Borrow book</a>
                    <a className="link link-hover">Books</a>
                    </ul>
                </nav>
                <nav className="flex p-1">
                    <h6 className="footer-title text-3xl text-blue-500">School</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className="flex p-1">
                    <h6 className="footer-title text-3xl text-blue-500">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className="flex p-1">
                    <h6 className="footer-title text-3xl text-blue-500">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">LinkedIn</a>
                </nav>
                <nav className="flex p-1">
                    <h6 className="footer-title text-3xl text-blue-500">Explore</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav className="flex">
                    <h6 className="footer-title text-3xl text-blue-500">Apps</h6>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </nav>
            </footer>

    </>
  )
}

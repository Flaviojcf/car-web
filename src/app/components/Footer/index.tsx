import { footerLinks } from '@/utils/mock/constants'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 px-6 py-10 sm:px-16">
        <div className="flex flex-col justify-start items-center gap-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-cointain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserverd &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={`${link.title}-${index}`} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item, index) => (
                <Link
                  href={item.url}
                  key={`${item.title}-${index}`}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  )
}

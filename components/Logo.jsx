import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div className=" lg:flex">
            <Link href="/">
                <Image alt="Protocol"  className="h-6 w-auto" width={100} height={24}  src="/logo.svg" />
            </Link>
        </div>
    )
}

export default Logo
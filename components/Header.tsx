import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({ children, className }: HeaderProps) => {
    return (
        <div className={cn('header', className)}>
            <Link href={"/"} className='md:flex-1'>
                <Image alt='Logo with name'
                    width={120}
                    height={32}
                    src="/assets/icons/logo.svg"
                    className='hidden md:block'
                />
                <Image alt='Logo without a name'
                    width={32}
                    height={32}
                    src="/assets/icons/logo-icon.svg"
                    className='mr-2 md:hidden'
                />
            </Link>
            {children}

        </div>
    )
}

export default Header

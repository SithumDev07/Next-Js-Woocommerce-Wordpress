import { sanitize } from '../../../utils/miscellaneous';
import {isEmpty, isArray} from 'lodash'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {getIconComponentByName} from "../../../utils/icon-map"

function Footer({footer}) {
    const {footerMenuItems, socialLinks, copyrightText, sidebarOne, sidebarTwo} = footer || {};
    const [isMounted, setIsMount] = useState( false );

    useEffect(() => {
        setIsMount(true);
    }, [])

    return (
        <footer className='bg-yellow-400 p-6'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap -mx-1 overflow-hidden text-gray-900'>
                    
                    {
                        isMounted ? (
                            <>
                                {/* WidgetOne */}
                                <div className='my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3'>
                                    <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarOne) }} />
                                </div>
                                {/* WidgetTwo */}
                                <div className='my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3'>
                                    <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarTwo) }} />
                                </div>
                            </>
                        ) : null
                    }

                    {/* Footer Menus */}
                    <div className='my-1  px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3'>
                        {!isEmpty(footerMenuItems) && isArray(footerMenuItems) ? (
                            <ul>
                                {
                                    footerMenuItems.map(menuItem => (
                                        <li key={menuItem?.ID}>
                                            <Link href={menuItem?.url}>
                                                <a>{menuItem?.title}</a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        ) : null}
                    </div>
                </div>
                <div className='mb-8 mt-8 w-full flex flex-wrap'>
                    {/* Copyright Text */}
                    <div className='w-full md:w-1/2 lg:w-1/4 text-gray-900'>
                            {copyrightText ? copyrightText : 'Copyright 2021'}
                    </div>
                    <div className='w-full lg:w-3/4 flex justify-end'>
                        {!isEmpty(socialLinks) && isArray(socialLinks) ? (
                            <ul className='flex items-center'>
                                {socialLinks.map(socialLink => (
                                    <li key={socialLink?.iconName} className='ml-4'>
                                        <a href={socialLink?.iconUrl || '/'} target="_blank" title={socialLink?.iconName}>
                                            {getIconComponentByName(socialLink?.iconName)}
                                            <span className='sr-only'>{socialLink?.iconName}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

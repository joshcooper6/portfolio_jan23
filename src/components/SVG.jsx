import { useState } from 'react';
import hamburger from '../assets/svgs/hamburger.svg';

export default function SVG({icon, color, size, more}) {

    const FILL = color ? color : '';
    const STYLES = `self-center ${more && more} ${size === 'small' ? 'w-[50px] h-[50px]' : ''}`

    if (icon === 'menu') {
        return <svg 
            className={STYLES}
            clipRule="evenodd" 
            fillRule="evenodd" 
            fill={FILL}
            strokeLinejoin="round" 
            strokeMiterlimit="2" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" 
            fillRule="nonzero"/>
            </svg>
    };

    if (icon === 'close') {
        return <svg 
        className={STYLES}
        clipRule="evenodd" 
        fill={FILL}
        fillRule="evenodd" 
        strokeLinejoin="round" 
        strokeMiterlimit="2" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg">
        <path 
        d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm7.491 6.432 2.717-2.718c.146-.146.338-.219.53-.219.404 0 .751.325.751.75 0 .193-.073.384-.22.531l-2.717 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-2.728-2.728-2.728 2.728c-.147.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z" 
        fillRule="nonzero"/>
        </svg>
    };

    if (icon === 'tweet') {
        return <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        fill={FILL}
        className={STYLES}
        height="24" 
        viewBox="0 0 24 24">
        <path 
        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
    }

    if (icon === 'github') {
        return <svg fill={FILL} className={STYLES} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    }

    if (icon === 'linkedin') {
        return <svg fill={FILL} className={STYLES} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
    }

    if (icon === 'lock') {
        return <svg fill={FILL} className={STYLES} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-4.138 9.975l-1.862-1.836-1.835 1.861-1.13-1.129 1.827-1.86-1.862-1.837 1.129-1.13 1.859 1.827 1.838-1.871 1.139 1.139-1.833 1.86 1.868 1.836-1.138 1.14zm-5.862-9.975v-4c0-2.206 1.795-4 4-4s4 1.794 4 4v4h-8z"/></svg>
    }

    if (icon === 'go') {
        return <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill={FILL}
        className={STYLES}
        viewBox="0 0 24 24">
        <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
    }
    return null;
}
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';

type DropdownItemProps = {
  title: string;
  href: string;

}

type DropdownMenuProps = {
  title: string;
  baseHref: string;
  options?: DropdownItemProps[];
  shouldMatchExactHref?: boolean;
}

export function DropdownMenu({ title, baseHref, options, shouldMatchExactHref = false }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const router = useRouter()
  let isActive = false;

  const openMenuOrRedirect = () => {
    // event.preventDefault()
    if (!options) {
      router.push(baseHref)
    } else {
      setOpen(!open)
    }
  }

  if (shouldMatchExactHref && (router.asPath === baseHref)) {
    isActive = true
  }

  if (!shouldMatchExactHref && (router.asPath.startsWith(String(baseHref)))) {
    isActive = true
  }

  const handleClickOutside = event => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={container} >

      <button
        type='button'
        className={!isActive ? styles.dropdownButton : styles.dropdownButtonActive}
        onClick={() => openMenuOrRedirect()}
      >
        {title}
      </button>

      {
        open && (
          <div className={styles.dropdownWrapper}>
            <ul className={styles.dropdownMenu} >
              {options.map((option) => {
                return (
                  <Link href={baseHref + option.href} key={option.title}>
                    <a onClick={() => setOpen(!open)}  >
                      <li>{option.title.toUpperCase()}</li>
                    </a>
                  </Link>
                )
              })}
            </ul>
          </div>
        )
      }
    </div >
  )
}

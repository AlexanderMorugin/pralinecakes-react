import React, { FC, 
  // MouseEvent, useRef

 } from 'react'

import styles from './scroll.module.scss'

interface IScroll {
  className?: string
  children: React.ReactNode
  withManualGrip?: boolean
}

const Scroll: FC<IScroll> = ({
  //  withManualGrip = false, 
  className, children }) => {
  // const listRef = useRef<HTMLDivElement>(null)
  // const startX = useRef(0)
  // const startScrollLeft = useRef(0)
  // const isDragging = useRef(false)

  // const handleMouseDown = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
  //   startX.current = e.clientX
  //   if (listRef && listRef.current) {
  //     startScrollLeft.current = listRef.current.scrollLeft
  //   }
  //   isDragging.current = true
  // }

  // const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
  //   if (!isDragging.current) return
  //   const deltaX = e.clientX - startX.current
  //   if (listRef.current) {
  //     listRef.current.scrollLeft = startScrollLeft.current - deltaX
  //   }
  // }

  // const handleMouseUp = () => {
  //   isDragging.current = false
  // }

  return (
    // withManualGrip ? 
  //   <ul
  //     className={`${styles.scroll} ${className}`}
  //     ref={listRef}
  //     onMouseMove={handleMouseMove}
  //     onMouseDown={handleMouseDown}
  //     onMouseUp={handleMouseUp}
  //     onMouseLeave={handleMouseUp}>
  //     {children}
  //   </ul>
  // ) : (
    <ul className={`${styles.scroll} ${className}`}>{children}</ul>
  )
}

export default Scroll
"use client"

import Link from "next/link"
import { ShoppingCart, Search, Menu, User } from "lucide-react"
import { useState } from "react"
import styles from "./header.module.css"
import { useCart } from "@/app/cart-context/cart-context"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoBadge}>
              <span className={styles.logoText}>GD</span>
            </div>
            <span className={styles.logoName}>GiaĐụcPlus</span>
          </Link>

          {/* Desktop Menu */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink}>
              Trang chủ
            </Link>
            <Link href="/shop" className={styles.navLink}>
              Sản phẩm
            </Link>
            <Link href="/about" className={styles.navLink}>
              Giới thiệu
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Liên hệ
            </Link>
            <Link href="/policies" className={styles.navLink}>
              Chính sách
            </Link>
          </nav>

          {/* Right Actions */}
          <div className={styles.actions}>
            <button className={styles.iconButton}>
              <Search size={20} />
            </button>
            <Link href="/cart" className={styles.cartButton}>
              <ShoppingCart size={20} />
              <span className={styles.cartBadge}>{totalItems}</span>
            </Link>
            <Link href="/profile" className={styles.iconButton}>
              <User size={20} />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.menuButton}>
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileNavLink}>
              Trang chủ
            </Link>
            <Link href="/shop" className={styles.mobileNavLink}>
              Sản phẩm
            </Link>
            <Link href="/about" className={styles.mobileNavLink}>
              Giới thiệu
            </Link>
            <Link href="/contact" className={styles.mobileNavLink}>
              Liên hệ
            </Link>
            <Link href="/policies" className={styles.mobileNavLink}>
              Chính sách
            </Link>
            <Link href="/profile" className={styles.mobileNavLink}>
              Tài khoản
            </Link>
            <Link href="/cart" className={styles.mobileNavLink}>
              Giỏ hàng
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "../components/shared/header/header"
import Footer from "../components/shared/footer/Footer"
import styles from "./forgot-password.module.css"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validation
    if (!email) {
      setError("Vui lòng nhập địa chỉ email")
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Địa chỉ email không hợp lệ")
      setIsSubmitting(false)
      return
    }

    // Simulate sending reset email
    setTimeout(() => {
      console.log("Password reset email sent to:", email)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.formCard}>
              <div className={styles.successIcon}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <h1 className={styles.title}>Kiểm tra email của bạn</h1>
              <p className={styles.successMessage}>
                Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến địa chỉ email <strong>{email}</strong>
              </p>
              <p className={styles.infoText}>
                Vui lòng kiểm tra hộp thư đến của bạn và làm theo hướng dẫn để đặt lại mật khẩu. Nếu không thấy email,
                hãy kiểm tra thư mục spam.
              </p>
              <Link href="/login" className={styles.backBtn}>
                Quay lại đăng nhập
              </Link>
              <button type="button" onClick={() => setIsSubmitted(false)} className={styles.resendBtn}>
                Gửi lại email
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            <div className={styles.icon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff8c42" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 className={styles.title}>Quên mật khẩu?</h1>
            <p className={styles.subtitle}>
              Nhập địa chỉ email của bạn và chúng tôi sẽ gửi hướng dẫn để đặt lại mật khẩu
            </p>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Địa chỉ Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  className={styles.input}
                  placeholder="email@example.com"
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "Đang gửi..." : "Gửi hướng dẫn đặt lại"}
              </button>
            </form>

            <div className={styles.backLink}>
              <Link href="/login">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Quay lại đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

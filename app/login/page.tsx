"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header from "../components/shared/header/header"
import Footer from "../components/shared/footer/Footer"
import styles from "./login.module.css"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validation
    if (!formData.email || !formData.password) {
      setError("Vui lòng điền đầy đủ thông tin")
      setIsSubmitting(false)
      return
    }

    // Simulate login
    setTimeout(() => {
      console.log("Login data:", formData)
      setIsSubmitting(false)
      router.push("/")
    }, 1000)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            <h1 className={styles.title}>Đăng Nhập</h1>
            <p className={styles.subtitle}>Chào mừng bạn quay trở lại!</p>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>

              <div className={styles.forgotPassword}>
                <Link href="/forgot-password">Quên mật khẩu?</Link>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "Đang xử lý..." : "Đăng Nhập"}
              </button>
            </form>

            <div className={styles.divider}>
              <span>hoặc</span>
            </div>

            <div className={styles.socialLogin}>
              <button type="button" className={styles.socialBtn}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M19.8 10.2273C19.8 9.51818 19.7364 8.83636 19.6182 8.18182H10V12.05H15.4727C15.2273 13.3 14.4636 14.3591 13.3091 15.0682V17.5773H16.7182C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10 20C12.7 20 14.9636 19.1045 16.7182 17.5773L13.3091 15.0682C12.3409 15.6682 11.1364 16.0227 10 16.0227C7.39545 16.0227 5.19091 14.2636 4.35909 11.9H0.831818V14.4909C2.57727 18.0318 6.01364 20 10 20Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.35909 11.9C4.15909 11.3 4.04545 10.6591 4.04545 10C4.04545 9.34091 4.15909 8.7 4.35909 8.1V5.50909H0.831818C0.15 6.85909 -0.227273 8.38636 -0.227273 10C-0.227273 11.6136 0.15 13.1409 0.831818 14.4909L4.35909 11.9Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10 3.97727C11.2682 3.97727 12.4045 4.38182 13.2864 5.22727L16.3227 2.19091C14.9591 0.886364 12.6955 0 10 0C6.01364 0 2.57727 1.96818 0.831818 5.50909L4.35909 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z"
                    fill="#EA4335"
                  />
                </svg>
                Đăng nhập với Google
              </button>

              <button type="button" className={styles.socialBtn}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#1877F2">
                  <path d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" />
                </svg>
                Đăng nhập với Facebook
              </button>
            </div>

            <p className={styles.registerLink}>
              Chưa có tài khoản? <Link href="/register">Đăng ký ngay</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

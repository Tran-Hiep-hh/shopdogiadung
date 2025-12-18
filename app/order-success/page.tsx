"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle, Package, Truck, CreditCard, MapPin, Phone, Mail } from "lucide-react"
import Header from "../components/shared/header/header"
import Footer from "../components/shared/footer/Footer"
import styles from "./order-success.module.css"

export default function OrderSuccessPage() {
  const [orderNumber] = useState(() => `DH${Date.now().toString().slice(-8)}`)
  const [orderDate] = useState(() => new Date().toLocaleDateString("vi-VN"))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const orderItems = [
    { id: 1, name: "Lò vi sóng thông minh", price: 2500000, quantity: 1, image: "/smart-microwave.jpg" },
    { id: 2, name: "Nồi áp suất điện", price: 1800000, quantity: 2, image: "/electric-pressure-cooker.jpg" },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Success Header */}
          <div className={styles.successHeader}>
            <CheckCircle className={styles.successIcon} size={64} />
            <h1 className={styles.title}>Đặt hàng thành công!</h1>
            <p className={styles.subtitle}>
              Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được xác nhận và đang được xử lý.
            </p>
          </div>

          {/* Order Info */}
          <div className={styles.orderInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Mã đơn hàng:</span>
                <span className={styles.infoValue}>{orderNumber}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Ngày đặt:</span>
                <span className={styles.infoValue}>{orderDate}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Trạng thái:</span>
                <span className={styles.statusBadge}>Đang xử lý</span>
              </div>
            </div>
          </div>

          {/* Order Timeline */}
          <div className={styles.timeline}>
            <div className={`${styles.timelineItem} ${styles.active}`}>
              <div className={styles.timelineIcon}>
                <CheckCircle size={24} />
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Đã xác nhận</h3>
                <p className={styles.timelineText}>Đơn hàng đã được xác nhận</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Package size={24} />
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Đang đóng gói</h3>
                <p className={styles.timelineText}>Dự kiến trong 1-2 ngày</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Truck size={24} />
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Đang giao hàng</h3>
                <p className={styles.timelineText}>Dự kiến 3-5 ngày làm việc</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <CheckCircle size={24} />
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Hoàn thành</h3>
                <p className={styles.timelineText}>Đã giao hàng thành công</p>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className={styles.content}>
            {/* Order Items */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Chi tiết đơn hàng</h2>
              <div className={styles.items}>
                {orderItems.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className={styles.itemImage} />
                    <div className={styles.itemInfo}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <p className={styles.itemQty}>Số lượng: {item.quantity}</p>
                    </div>
                    <div className={styles.itemPrice}>{(item.price * item.quantity).toLocaleString("vi-VN")}₫</div>
                  </div>
                ))}
              </div>

              <div className={styles.divider}></div>

              <div className={styles.summary}>
                <div className={styles.summaryRow}>
                  <span>Tạm tính:</span>
                  <span>{subtotal.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Vận chuyển:</span>
                  <span className={styles.free}>Miễn phí</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Thuế (10%):</span>
                  <span>{tax.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.totalRow}>
                  <span>Tổng cộng:</span>
                  <span className={styles.totalAmount}>{total.toLocaleString("vi-VN")}₫</span>
                </div>
              </div>
            </div>

            {/* Delivery & Payment Info */}
            <aside className={styles.sidebar}>
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <MapPin size={20} />
                  Địa chỉ giao hàng
                </h3>
                <p className={styles.infoBoxText}>Nguyễn Văn A</p>
                <p className={styles.infoBoxText}>123 Đường ABC, Quận 1</p>
                <p className={styles.infoBoxText}>TP. Hồ Chí Minh, 70000</p>
              </div>

              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <CreditCard size={20} />
                  Phương thức thanh toán
                </h3>
                <p className={styles.infoBoxText}>Thanh toán khi nhận hàng (COD)</p>
              </div>

              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <Phone size={20} />
                  Liên hệ
                </h3>
                <p className={styles.infoBoxText}>
                  <Phone size={16} className={styles.infoIcon} />
                  0901 234 567
                </p>
                <p className={styles.infoBoxText}>
                  <Mail size={16} className={styles.infoIcon} />
                  contact@giadung.vn
                </p>
              </div>
            </aside>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <Link href="/shop" className={styles.btnSecondary}>
              Tiếp tục mua sắm
            </Link>
            <button className={styles.btnPrimary}>Xem đơn hàng của tôi</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

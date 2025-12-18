"use client"

import { useState } from "react"
import Headers from "../components/shared/header/header"
import Footer from "../components/shared/footer/Footer"
import { User, Package, MapPin, Lock, Settings, LogOut } from "lucide-react"
import styles from "./profile.module.css"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info")

  const orderHistory = [
    {
      id: "DH12345678",
      date: "15/12/2024",
      status: "Đã giao",
      total: 6100000,
      items: 2,
    },
    {
      id: "DH12345679",
      date: "10/12/2024",
      status: "Đang giao",
      total: 3200000,
      items: 1,
    },
    {
      id: "DH12345680",
      date: "05/12/2024",
      status: "Đã hủy",
      total: 1500000,
      items: 1,
    },
  ]

  return (
    <>
      <Headers />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Tài khoản của tôi</h1>

          <div className={styles.content}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <button
                className={`${styles.sidebarItem} ${activeTab === "info" ? styles.active : ""}`}
                onClick={() => setActiveTab("info")}
              >
                <User size={20} />
                Thông tin cá nhân
              </button>
              <button
                className={`${styles.sidebarItem} ${activeTab === "orders" ? styles.active : ""}`}
                onClick={() => setActiveTab("orders")}
              >
                <Package size={20} />
                Đơn hàng của tôi
              </button>
              <button
                className={`${styles.sidebarItem} ${activeTab === "address" ? styles.active : ""}`}
                onClick={() => setActiveTab("address")}
              >
                <MapPin size={20} />
                Địa chỉ giao hàng
              </button>
              <button
                className={`${styles.sidebarItem} ${activeTab === "password" ? styles.active : ""}`}
                onClick={() => setActiveTab("password")}
              >
                <Lock size={20} />
                Đổi mật khẩu
              </button>
              <button
                className={`${styles.sidebarItem} ${activeTab === "settings" ? styles.active : ""}`}
                onClick={() => setActiveTab("settings")}
              >
                <Settings size={20} />
                Cài đặt
              </button>
              <button className={`${styles.sidebarItem} ${styles.logout}`}>
                <LogOut size={20} />
                Đăng xuất
              </button>
            </aside>

            {/* Main Content */}
            <div className={styles.mainContent}>
              {/* Personal Info Tab */}
              {activeTab === "info" && (
                <div className={styles.tabContent}>
                  <h2 className={styles.tabTitle}>Thông tin cá nhân</h2>
                  <form className={styles.form}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Họ và tên</label>
                      <input type="text" className={styles.input} defaultValue="Nguyễn Văn A" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email</label>
                      <input type="email" className={styles.input} defaultValue="nguyenvana@email.com" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Số điện thoại</label>
                      <input type="tel" className={styles.input} defaultValue="0901 234 567" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Ngày sinh</label>
                      <input type="date" className={styles.input} defaultValue="1990-01-01" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Giới tính</label>
                      <select className={styles.input}>
                        <option>Nam</option>
                        <option>Nữ</option>
                        <option>Khác</option>
                      </select>
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      Cập nhật thông tin
                    </button>
                  </form>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className={styles.tabContent}>
                  <h2 className={styles.tabTitle}>Đơn hàng của tôi</h2>
                  <div className={styles.orders}>
                    {orderHistory.map((order) => (
                      <div key={order.id} className={styles.orderCard}>
                        <div className={styles.orderHeader}>
                          <div>
                            <h3 className={styles.orderId}>Mã đơn hàng: {order.id}</h3>
                            <p className={styles.orderDate}>{order.date}</p>
                          </div>
                          <span
                            className={`${styles.statusBadge} ${
                              order.status === "Đã giao"
                                ? styles.delivered
                                : order.status === "Đang giao"
                                  ? styles.shipping
                                  : styles.cancelled
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className={styles.orderDetails}>
                          <p>Số lượng: {order.items} sản phẩm</p>
                          <p className={styles.orderTotal}>Tổng tiền: {order.total.toLocaleString("vi-VN")}₫</p>
                        </div>
                        <button className={styles.viewBtn}>Xem chi tiết</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Address Tab */}
              {activeTab === "address" && (
                <div className={styles.tabContent}>
                  <h2 className={styles.tabTitle}>Địa chỉ giao hàng</h2>
                  <div className={styles.addresses}>
                    <div className={styles.addressCard}>
                      <div className={styles.addressHeader}>
                        <h3 className={styles.addressName}>Nguyễn Văn A</h3>
                        <span className={styles.defaultBadge}>Mặc định</span>
                      </div>
                      <p className={styles.addressText}>Số điện thoại: 0901 234 567</p>
                      <p className={styles.addressText}>123 Đường ABC, Quận 1, TP. Hồ Chí Minh, 70000</p>
                      <div className={styles.addressActions}>
                        <button className={styles.editBtn}>Chỉnh sửa</button>
                        <button className={styles.deleteBtn}>Xóa</button>
                      </div>
                    </div>
                    <button className={styles.addAddressBtn}>+ Thêm địa chỉ mới</button>
                  </div>
                </div>
              )}

              {/* Password Tab */}
              {activeTab === "password" && (
                <div className={styles.tabContent}>
                  <h2 className={styles.tabTitle}>Đổi mật khẩu</h2>
                  <form className={styles.form}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Mật khẩu hiện tại</label>
                      <input type="password" className={styles.input} placeholder="Nhập mật khẩu hiện tại" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Mật khẩu mới</label>
                      <input type="password" className={styles.input} placeholder="Nhập mật khẩu mới" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Xác nhận mật khẩu mới</label>
                      <input type="password" className={styles.input} placeholder="Nhập lại mật khẩu mới" />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      Cập nhật mật khẩu
                    </button>
                  </form>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className={styles.tabContent}>
                  <h2 className={styles.tabTitle}>Cài đặt</h2>
                  <div className={styles.settings}>
                    <div className={styles.settingItem}>
                      <div>
                        <h3 className={styles.settingTitle}>Nhận thông báo qua email</h3>
                        <p className={styles.settingDesc}>Nhận thông tin về đơn hàng và khuyến mãi</p>
                      </div>
                      <label className={styles.switch}>
                        <input type="checkbox" defaultChecked />
                        <span className={styles.slider}></span>
                      </label>
                    </div>
                    <div className={styles.settingItem}>
                      <div>
                        <h3 className={styles.settingTitle}>Nhận thông báo qua SMS</h3>
                        <p className={styles.settingDesc}>Nhận tin nhắn về trạng thái đơn hàng</p>
                      </div>
                      <label className={styles.switch}>
                        <input type="checkbox" defaultChecked />
                        <span className={styles.slider}></span>
                      </label>
                    </div>
                    <div className={styles.settingItem}>
                      <div>
                        <h3 className={styles.settingTitle}>Nhận tin khuyến mãi</h3>
                        <p className={styles.settingDesc}>Nhận thông tin về chương trình ưu đãi</p>
                      </div>
                      <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.slider}></span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

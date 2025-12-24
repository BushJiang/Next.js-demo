'use client';  // 告诉 Next.js：这是一个客户端组件（可以使用 React Hooks，比如usePathname）
// 最简版本 - 添加活动链接功能

// 简单概括："客户端组件"的作用：
// - 可以在浏览器中执行（客户端）
// - 可以使用 React Hooks（useState、usePathname 等）
// - 可以处理用户交互（点击、悬停等）
// - 默认情况下，Next.js 的组件是"服务端组件"，不能使用 Hooks

import Link from 'next/link';
import { usePathname } from 'next/navigation';  // 导入 Next.js 的路径钩子，获取当前页面路径
import clsx from 'clsx';  // 导入 clsx 库，用于条件性应用 CSS 类名

export default function SideNav() {
  const pathname = usePathname();  // 获取当前路径

  // 实现原理：
  // 1. 准备工作。
  // 1.1 导入React Hooks：`usePathname`。需要先告诉 Next.js 这是一个客户端组件，能用React的所有功能：'use client';
  // 1.2. 导入usePathname。import { usePathname } from 'next/navigation';
  // 1.3. 导入clsx，可以根据条件动态选择类名。import clsx from 'clsx'
  // 2. 获取当前路径。使用前面导入的userPathname。const pathname = usePathname();
  // 3. 路径匹配。将当前路径 pathname 与每个链接的 href 比较。pathname === '/dashboard'（直接比较字符串）。
  // 4. 应用"活动样式"。如果相等，说明是当前页面。那么，就使用 clsx 根据条件动态应用样式

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-100">
      {/* Logo */}
      <div className="mb-8 p-4">
        <h1 className="text-xl font-bold text-blue-600">Acme Inc</h1>
        <p className="text-sm text-gray-500">Dashboard</p>
      </div>

      <nav className="flex-1 space-y-2">
        {/* Home 链接 */}
        <Link
          href="/dashboard"
          className={clsx(
            // 基础样式：灰色文字，悬停时蓝色
            'block p-3 rounded-md hover:bg-blue-50 hover:text-blue-600 text-gray-700',
            // 活动链接样式：当当前路径是 /dashboard 时，链接显示为蓝色背景+文字
            {
              'bg-blue-100 text-blue-600': pathname === '/dashboard',
            },
          )}
        >
          Home
        </Link>

        {/* Invoices 链接 */}
        <Link
          href="/dashboard/invoices"
          className={clsx(
            'block p-3 rounded-md hover:bg-blue-50 hover:text-blue-600 text-gray-700',
            {
              'bg-blue-100 text-blue-600': pathname === '/dashboard/invoices',
            },
          )}
        >
          Invoices
        </Link>

        {/* Customers 链接 */}
        <Link
          href="/dashboard/customers"
          className={clsx(
            'block p-3 rounded-md hover:bg-blue-50 hover:text-blue-600 text-gray-700',
            {
              'bg-blue-100 text-blue-600': pathname === '/dashboard/customers',
            },
          )}
        >
          Customers
        </Link>
      </nav>

      {/* 登出 */}
      <div className="mt-auto p-3">
        <button className="w-full p-3 text-left rounded-md hover:bg-red-50 hover:text-red-600 text-gray-700">
          Sign Out
        </button>
      </div>
    </div>
  );
}
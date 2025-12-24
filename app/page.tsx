'use client';
import Image from "next/image";  // 从 next/image 导入 Image 组件
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function Home() {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* 使用 Next.js Image 组件替代普通 <img> 标签
            Image 组件提供自动优化、懒加载、格式转换等功能 */}
        <Image
          className="dark:invert"          // 添加 CSS 样式类，dark:invert 在深色模式下反转颜色
          src="/file.svg"                  // 图片路径：/file.svg 指向 public/file.svg
          alt="Next.js logo"               // 替代文本：图片无法显示时显示此文字（无障碍访问必需）
          width={100}                      // 图片宽度：100 像素（必填，除非使用 fill 属性）
          height={100}                     // 图片高度：20 像素（必填，除非使用 fill 属性）
                                           // 建议将图片的 width 和 height 设置为避免布局偏移，这些应与源图片的宽高比相同。
                                           // 这些值不是图片实际渲染的尺寸，而是实际图片文件的尺寸，用于理解宽高比。
          // fill                          // 可选：让图片充满父容器（响应式图片时使用）
          priority                         // 优先级：标记为高优先级，优先加载（用于首屏关键图片）
        />
        
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-sky-500 dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          

          
          
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        
        
        {/* 显示活动链接示例 */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            href="/dashboard/customers"
            className={clsx(
              // 基础样式：灰色背景，悬停时变蓝色
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              // 活动链接样式：当当前路径匹配时，显示蓝色背景和文字
              {
                'bg-sky-100 text-blue-600': pathname === '/dashboard/customers',
              },
            )}
          >
            dashboard-Link
          </Link>
        </div>

        {/* 说明： */}
        {/* "活动链接"功能说明： */}
        {/* 1. 当用户访问 /dashboard/customers 页面时，这个链接会变成蓝色高亮 */}
        {/* 2. 使用 usePathname() 获取当前路径 */}
        {/* 3. 使用 clsx 根据 pathname === '/dashboard/customers' 决定应用哪个样式 */}
        {/* 4. 'bg-sky-100 text-blue-600' 是活动状态的样式（蓝色背景+文字） */}
        {/* 5. 这样用户就能知道他们当前在哪个页面 */}
        
        
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}

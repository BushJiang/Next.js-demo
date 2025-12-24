import SideNav from '@/app/dashboard/sidenav';

// ==================== 新手一句话理解 ====================
// 这个函数会自动接收页面内容（children），把 SideNav 导航栏和这个内容组合成一个完整的布局返回
// SideNav 导航栏：左侧的导航菜单，包含 Home、Invoices、Customers 等链接
// children 具体是什么：就是当前页面的内容（具体指对应路由的 page.tsx 文件导出的组件）
//    - 访问 /dashboard 时，children = app/dashboard/page.tsx 文件中 export default function Page() 的返回值
//    - 访问 /dashboard/invoices 时，children = app/dashboard/invoices/page.tsx 文件的返回值
//    - 访问 /dashboard/customers 时，children = app/dashboard/customers/page.tsx 文件的返回值
//    例：dashboard/page.tsx 内容是：export default function Page() { return <p>Dashboard Page</p>; }
//        那么 children 的值就是 <p>Dashboard Page</p> 这个 JSX 元素
//
// 重要说明：这个 Layout 组件的特殊性
// - 这是 Next.js App Router 的"布局组件"，不是普通 React 组件
// - 在 Next.js 布局组件中，children 确实是页面内容（这是 Next.js 的设计）
// - 但在其他普通 React 组件中，children 可以是任何东西：
//   <Card>可以是文字、按钮、图片、组件</Card>
//   <Button>可以是图标、文本、甚至其他组件</Button>
// - 所以"children = 页面内容"只适用于：Next.js 布局组件 + 当前这个特定项目
//   并不是所有项目的通用规则
// 使用方法：在这里写所有页面共有的内容（SideNav 导航栏），{children} 位置会自动显示当前页面的具体内容

// 1. export default
//    TypeScript: 导出方式 - 默认导出，Next.js 通过这个识别并导入布局组件，不依赖函数名
//    Python: 没有完全等价，但可理解为函数在模块中可直接使用，如 __all__ = ['layout']

// 2. function Layout
//    TypeScript: 定义一个名为 Layout 的 React 函数组件，主要用于代码可读性和调试
//    Python: def layout() - 定义函数，名称用于识别和调试，可改成任何名字

// 3. { children }（参数解构）
//    TypeScript: 从 props 对象中提取 children 属性，等价于：
//               function Layout(props) { const { children } = props; }
//               children 的值：由 Next.js 传入的子组件内容
//               例：访问 /dashboard 时，children = <DashboardPage />
//    Python: children = props['children'] 或直接 def layout(children)
//           等价于从字典/对象中提取特定键的值
//
//    重要说明：
//    - children 是什么：JSX 标签内的所有内容（文本、组件、HTML元素等）
//      例：<Layout><div>Hello</div><Page /></Layout>
//          children = <div>Hello</div><Page />  （可以是数组）
//    - props 对象还可以有什么属性：
//      取决于组件定义！例如：
//      <Layout title="仪表板" user={user} showNav={true}>
//      此时 props = { title: "仪表板", user: user, showNav: true, children: ... }
//      开发者可以自由添加任何属性：字符串、数字、对象、函数等
//
//    具体例子对比：
//    情况1（我们的 Layout 组件）：
//    <Layout><Page /></Layout>
//    props = { children: <Page /> }  ← 只有 children！
//
//    情况2（其他组件可能有额外属性）：
//    <UserCard name="张三" age={25} isActive={true} onClick={fn} />
//    props = {
//      name: "张三",          // 字符串
//      age: 25,              // 数字
//      isActive: true,       // 布尔值
//      onClick: fn,          // 函数
//      children: ...         // JSX 内容（如果有）
//    }
//
//    情况3（混用）：
//    <Card title="卡片" footer={<Button>确定</Button>}>
//      <p>内容</p>
//    </Card>
//    props = {
//      title: "卡片",                    // 字符串属性
//      footer: <Button>确定</Button>,    // JSX 属性
//      children: <p>内容</p>             // 嵌套内容
//    }
//
//    - 在这个 Layout 组件中：我们只使用 children，Next.js 只传入 children

// 4. { children: React.ReactNode }（TypeScript 类型注解）
//    TypeScript: 定义 props 参数的类型，格式 { 属性名: 类型名 }
//               告诉 TypeScript：props 是一个对象，有一个 children 属性
//               React.ReactNode 包括：字符串、数字、JSX元素、数组、组件等
//               注意：这是类型定义，运行时不存在，只用于编译时检查
//    Python: children: React.ReactNode 或 props: Dict[str, Any]
//           作用相同：告诉类型检查器参数应该是什么类型

// 5. 为什么要写成 { children: React.ReactNode }
//    TypeScript: props: { children: React.ReactNode }（对象类型）
//               React 组件的 props 永远是一个对象，必须包含 children 属性
//               ❌ 错误写法：props: React.ReactNode（React.ReactNode 不是对象，没有 children 属性）
//    Python: props: Dict[str, Any]（字典类型）
//           React 组件的 props 必须是对象，包含指定的属性
//           区别：React.ReactNode 不是对象，不能直接作为 props 类型

// 6. children 的实际作用
//    TypeScript: 接收并渲染子组件内容，让多个页面共享同一个布局（导航栏、侧边栏等）
//               Next.js 自动注入对应页面的内容到这里
//    Python: 接收并渲染子组件内容，实现页面布局的共享
//           手动管理组件内容的传递

// 7. props 对象来源
//    TypeScript: React 框架自动创建并传递，开发者无需手动处理
//               写 <Layout><Page /></Layout> 时，React 自动创建 props = { children: <Page /> }
//    Python: 开发者手动传入，如 layout({'children': '<Page />'})
//           这是关键区别：TypeScript/React 会自动管理 props

// 8. 函数调用方式
//    TypeScript: <Layout>{content}</Layout> - JSX 语法，React 内部处理为 createElement 调用
//               Next.js 根据路由自动包装：<Layout><DashboardPage /></Layout>
//    Python: layout({'children': content}) 或 layout(content) - 手动调用函数
//           开发者必须显式传递所有参数

// 9. 完整的工作流程
//    TypeScript: 用户访问 /dashboard 时：
//                Next.js 执行：<Layout><Page /></Layout>
//                Layout 组件返回：<div><SideNav />{children}</div>
//                最终渲染：导航栏 + 当前页面内容
//    Python: 开发者手动调用：
//            result = layout({'children': '<Page />'})
//            返回：字符串形式的 HTML 或组件

// 10. 简化理解
//     这行代码就是定义一个函数，接受一个参数（children），
//     然后将这个参数插入到固定的结构中返回。
//     在 React/Next.js 中，children 由框架自动传入，无需手动创建。

// 简单解释：
// 函数自动接收页面内容（children），把侧边导航栏（<SideNav />）和接收的页面内容组合成一个完整的布局返回。
// children 具体指对应路由的 page.tsx 文件导出的组件。
// 比如，访问 /dashboard 时，children = app/dashboard/page.tsx 文件中 export default function Page() 的返回值。

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // 注意：可以删除 <> Fragment，因为这里只有一个直接子元素 <div>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* 左侧导航区域，使用导入的SideNav */}
      {/* w-full: 在小屏幕上宽度占满整个容器 */}
      {/* flex-none: 防止这个区域收缩，保持固定大小 */}
      {/* md:w-64: 在中等及以上屏幕上，固定宽度为 64（16rem = 256px） */}
      {/* 这里我们放置了 SideNav 组件，这是所有仪表板页面的导航菜单 */}
      {/* 通过放在布局组件中，所有仪表板子页面都会自动拥有这个导航菜单 */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      {/* 右侧内容区域，使用自动接收的children */}
      {/* 注意：除了布局组件，您还会在其他组件中看到 Link 参数，例如： */}
      {/* <Link */}
      {/*   href="/dashboard"          // 必填：目标页面路径（字符串） */}
      {/*   className="block p-3..."   // 可选：CSS 类名（字符串），控制样式 */}
      {/* > */}
      {/*   dashboard-Link             // Link 标签内的内容（文本或 JSX） */}
      {/* </Link> */}
      {/* */}
      {/* 重要说明：[/dashboard] 不是"增加"，而是"跳转" */}
      {/* - href="/dashboard" 意思是：当用户点击链接时，跳转到根目录下的 /dashboard 页面 */}
      {/* - 不是在当前页面添加内容，而是导航到另一个页面 */}
      {/* - 当前页面如果是 /users，那么点击后页面会跳转到 /dashboard */}
      {/* - 路径开头的 "/" 表示从网站根目录开始 */}
      {/* */}
      {/* 例子说明： */}
      {/* 假设网站地址是：https://example.com */}
      {/* 1. href="/dashboard" → 跳转到：https://example.com/dashboard */}
      {/* 2. href="/about"     → 跳转到：https://example.com/about */}
      {/* 3. href="/users/123" → 跳转到：https://example.com/users/123 */}
      {/* */}
      {/* 总结： */}
      {/* - "/" 开头的路径：从网站根目录开始计算 */}
      {/* - 不以 "/" 开头的路径：从当前页面开始计算 */}
      {/* */}
      {/* Link 参数详解： */}
      {/* 1. href（必填，HTML 属性）： */}
      {/*    - 不是类，是属性（HTML attribute / React prop） */}
      {/*    - 格式：字符串，代表要跳转到的页面路径 */}
      {/*    - 例："/dashboard"、"about"、"contact" */}
      {/*    - 作用：指定点击链接后要跳转到的目标页面 */}
      {/* 2. className（可选，React 属性）： */}
      {/*    - 不是类，是属性（React prop） */}
      {/*    - 格式：字符串，包含 CSS 类名 */}
      {/*    - 作用：控制链接的外观（颜色、大小、背景等） */}
      {/*    - 可以写多个类名，用空格分隔 */}
      {/* 3. Link 标签内的内容： */}
      {/*    - 可以是文本（"首页"） */}
      {/*    - 可以是 JSX 元素（<span>文本</span>） */}
      {/*    - 可以是图标组件 */}
      {/* */}
      {/* 重要区别： */}
      {/* - href 和 className 都是"属性"（properties / props） */}
      {/* - 不是"类"（class） */}
      {/* - 在 HTML 中叫"属性"，在 React 中叫"props" */}
      {/* - 它们是组件的参数，用来配置组件的行为 */}
      {/* grow: 占据剩余的所有空间（让内容区域自适应大小） */}
      {/* p-6: 在小屏幕上，内边距为 24px（让内容不贴边） */}
      {/* md:overflow-y-auto: 在电脑屏幕上，如果内容超出高度则显示垂直滚动条 */}
      {/* md:p-12: 在中等及以上屏幕上，内边距增加到 48px */}
      {/* {children} 是最重要的部分 - 这里会渲染当前页面的实际内容 */}
      {/* 例如，当用户访问 /dashboard 时，这里会显示 dashboard/page.tsx 的内容；当用户访问 /dashboard/invoices 时，这里会显示 invoices 页面的内容 */}
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

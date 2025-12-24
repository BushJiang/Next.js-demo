import InvoiceStatus from "@/app/invoices/status";



/* ==========================================================================
   第1步：定义页面组件
   ==========================================================================
   定义一个 React 组件作为示例页面的内容
*/
export default function InvoiceDemoPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-6">InvoiceStatus 组件示例</h1>

      <div className="space-y-4">
        {/* ==========================================================================
             第2步：调用组件
             ==========================================================================
             现在我们可以在 JSX 中使用 InvoiceStatus 组件了

             语法：
             <组件名 属性名="属性值" />

             重要概念：
             - JSX 标签：使用 <> 包裹，表示这是一个 React 组件
             - 属性传递：通过标签属性向组件传递数据
             - 自闭合标签：没有子内容的标签以 /> 结尾

             组件调用过程：
             1. React 遇到 <InvoiceStatus 标签
             2. 调用 InvoiceStatus 组件函数
             3. 传递属性 { status: "pending" } 给组件
             4. 组件返回相应的 JSX（带有样式的 span 元素）
             5. React 将返回的 JSX 插入到页面的 DOM 中
        */}

        {/* 示例1：待付款状态 */}
        <div>
          {/* 标题说明 */}
          <h2 className="text-xl font-semibold mb-2">待付款状态：</h2>

          {/* 调用 InvoiceStatus 组件，传递 status="pending"
               组件内部会根据这个值：
               - 应用 'bg-gray-100 text-gray-500' 样式（灰色背景）
               - 显示文字 '待付款' */}
          <InvoiceStatus status="pending" />
          {/* 渲染结果：<span class="...bg-gray-100 text-gray-500...">待付款</span> */}
        </div>

        {/* 示例2：已付款状态 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">已付款状态：</h2>

          {/* 调用 InvoiceStatus 组件，传递 status="paid"
               组件内部会根据这个值：
               - 应用 'bg-green-500 text-white' 样式（绿色背景）
               - 显示文字 '已付款' */}
          <InvoiceStatus status="paid" />
          {/* 渲染结果：<span class="...bg-green-500 text-white...">已付款</span> */}
        </div>

        {/* 示例3：未知/其他状态 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">未知状态：</h2>

          {/* 调用 InvoiceStatus 组件，传递 status="cancelled"
               由于 'cancelled' 不是 'pending' 或 'paid'：
               - 不应用任何条件样式（没有背景色）
               - 显示原始值 'cancelled' */}
          <InvoiceStatus status="cancelled" />
          {/* 渲染结果：<span class="...（只有基础样式）...">cancelled</span> */}
        </div>
      </div>
    </div>
  );
}

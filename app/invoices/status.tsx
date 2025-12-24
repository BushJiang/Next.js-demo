/*
   发票状态组件
   ================

   作用：根据传入的 status 参数，显示不同样式的状态标签

   使用方法：
   <InvoiceStatus status="pending" />  // 显示：待付款（灰色标签）
   <InvoiceStatus status="paid" />      // 显示：已付款（绿色标签）
   <InvoiceStatus status="其他值" />    // 显示：其他值（无颜色）

   参数：
   - status: 字符串，表示发票状态
     * 'pending' - 待付款
     * 'paid' - 已付款
     * 其他值 - 直接显示传入的值
*/

// 导入 clsx 库：用于条件性地组合 CSS 类名
import clsx from 'clsx';

// 定义组件，接收一个 status 属性（类型为字符串）
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      // 使用 clsx 根据条件动态设置类名
      className={clsx(
        // 基础样式：始终应用的样式
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        // 条件样式：根据 status 的值应用不同的样式
        {
          // 当 status 是 'pending' 时，使用灰色样式
          'bg-gray-100 text-gray-500': status === 'pending',
          // 当 status 是 'paid' 时，使用绿色样式
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {/* 根据 status 的值显示不同的文字
          使用三元运算符进行条件判断：
          1. 如果 status === 'pending'，显示 '待付款'
          2. 否则如果 status === 'paid'，显示 '已付款'
          3. 否则显示原始的 status 值 */}
      {status === 'pending' ? '待付款' : status === 'paid' ? '已付款！！！！' : status}
    </span>
  );
}

/*
   知识点总结：
   ==========

   1. clsx 库的作用：
      - 条件性地组合 CSS 类名
      - 当条件为真时，添加对应的类名
      - 当条件为假时，不添加该类名

   2. 组件设计模式：
      - 接收 props（属性）
      - 根据 props 返回 JSX
      - 可以在任何地方重复使用
*/
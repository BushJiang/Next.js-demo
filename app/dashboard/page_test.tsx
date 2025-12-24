import Image from "next/image";

export default function Page() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">图片动画展示</h1>

      {/* 旋转动画 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">🌀 旋转动画：</h2>
        <div className="border rounded-lg p-4 bg-white flex justify-center">
          <Image
            src="/little_baby.png"
            alt="little_baby"
            width={200}
            height={200}
            className="animate-spin"  // 旋转动画
          />
        </div>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded">
{`<Image
  src="/little_baby.png"
  className="animate-spin"  // 无限旋转
/>`}
        </pre>
      </div>

      {/* 脉冲动画 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">💓 脉冲动画：</h2>
        <div className="border rounded-lg p-4 bg-white flex justify-center">
          <Image
            src="/image1.png"
            alt="image1"
            width={200}
            height={200}
            className="animate-pulse"  // 脉冲动画
          />
        </div>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded">
{`<Image
  src="/image1.png"
  className="animate-pulse"  // 淡入淡出
/>`}
        </pre>
      </div>

      {/* 摇摆动画 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">↔️ 弹跳动画：</h2>
        <div className="border rounded-lg p-4 bg-white flex justify-center">
          <Image
            src="/little_baby.png"
            alt="little_baby"
            width={200}
            height={200}
            className="animate-bounce"  // 弹跳动画
          />
        </div>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded">
{`<Image
  src="/little_baby.png"
  className="animate-bounce"  // 上下弹跳
/>`}
        </pre>
      </div>

      {/* 悬停触发动画 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">🖱️ 悬停触发动画：</h2>
        <div className="border rounded-lg p-4 bg-white flex justify-center">
          <Image
            src="/image1.png"
            alt="image1"
            width={200}
            height={200}
            className="hover:animate-spin transition-transform duration-300 cursor-pointer"  // 悬停触发
          />
        </div>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded">
{`<Image
  src="/image1.png"
  className="hover:animate-spin transition-transform duration-300"
  // 鼠标悬停时旋转，离开时停止
/>`}
        </pre>
      </div>

      {/* 组合动画 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">✨ 组合动画（旋转 + 脉冲）：</h2>
        <div className="border rounded-lg p-4 bg-white flex justify-center">
          <Image
            src="/little_baby.png"
            alt="little_baby"
            width={200}
            height={200}
            className="animate-spin animate-pulse"  // 组合动画
          />
        </div>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded">
{`<Image
  src="/little_baby.png"
  className="animate-spin animate-pulse"  // 旋转 + 脉冲
/>`}
        </pre>
      </div>

      {/* 动画速查表 */}
      <section className="mt-10 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">📚 动画速查表</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-blue-200 p-3 text-left">动画类名</th>
                <th className="border border-blue-200 p-3 text-left">效果</th>
                <th className="border border-blue-200 p-3 text-left">示例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-mono">animate-spin</td>
                <td className="border border-blue-200 p-3">无限旋转</td>
                <td className="border border-blue-200 p-3">加载图标</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-mono">animate-pulse</td>
                <td className="border border-blue-200 p-3">脉冲/闪烁</td>
                <td className="border border-blue-200 p-3">等待状态</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-mono">animate-bounce</td>
                <td className="border border-blue-200 p-3">弹跳</td>
                <td className="border border-blue-200 p-3">成功提示</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-mono">hover:animate-spin</td>
                <td className="border border-blue-200 p-3">悬停旋转</td>
                <td className="border border-blue-200 p-3">交互反馈</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-mono">transition-transform</td>
                <td className="border border-blue-200 p-3">平滑过渡</td>
                <td className="border border-blue-200 p-3">所有动画</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 最佳实践 */}
      <section className="mt-10 p-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">💡 最佳实践</h2>
        <ul className="list-disc list-inside space-y-2 text-green-600">
          <li><strong>适度使用</strong>：动画不要过于频繁，避免影响用户体验</li>
          <li><strong>性能考虑</strong>：复杂动画可能影响性能，适当使用</li>
          <li><strong>移动端适配</strong>：考虑移动设备的性能和电量</li>
          <li><strong>交互反馈</strong>：使用悬停动画提供交互反馈</li>
        </ul>
      </section>
    </div>
  );
}
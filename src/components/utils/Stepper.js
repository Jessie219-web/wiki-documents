import React, { useState } from 'react';
import { Steps } from 'antd';

export default function Steppers({ children }) {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => setCurrent(value);

  const parseChildrenToItems = () => {
    const items = [];
    const validChildren = React.Children.toArray(children);

    let currentStepDescription = [];

    validChildren.forEach(child => {
      if (!React.isValidElement(child)) return;

      // MDX 可能生成 mdxType: 'h3' 的 props，而不是 type: 'h3'。
      const isHeading = child.props?.mdxType === 'h3' || child.type === 'h3';

      if (isHeading) {
        if (items.length > 0 && currentStepDescription.length > 0) {
          items[items.length - 1].description = <>{currentStepDescription}</>;
        }
        currentStepDescription = [];
        items.push({
          title: child.props.children,
          description: null,
        });
      } else {
        currentStepDescription.push(child);
      }
    });

    if (items.length > 0 && currentStepDescription.length > 0) {
      items[items.length - 1].description = <>{currentStepDescription}</>;
    }

    return items;
  };

  const items = parseChildrenToItems();

  // 如果没有解析出任何步骤，则不渲染任何内容，避免报错。
  if (items.length === 0) {
    // 可以在这里返回一个提示，告诉作者内容格式可能不正确
    if (process.env.NODE_ENV === 'development') {
      return (
        <div style={{ padding: '1rem', border: '1px dashed red', color: 'red', backgroundColor: '#fff5f5' }}>
          <strong>MarkdownSteps 组件警告:</strong> 未能解析出任何步骤。请确保在 <code>&lt;MarkdownSteps&gt;</code> 内部使用了 <code>### 标题</code> 格式来定义每个步骤。
        </div>
      );
    }
    return null;
  }

  return (
    <Steps
      current={current}
      onChange={onChange}
      direction="vertical"
      items={items}
    />
  );
}
// 文件路径: src/components/Steppers.js

import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import { Steps } from 'antd';

export default function Steppers({ children }) {
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const history = useHistory();

  const onChange = (value) => {
    const targetId = items[value]?.id;
    if (targetId) {
      history.push({ hash: `#${targetId}` });
    }
  };

  const items = useMemo(() => {
    const stepsData = [];
    let currentStep = null;
    const validChildren = React.Children.toArray(children);

    validChildren.forEach(child => {
      if (!React.isValidElement(child)) return;
      const mdxType = child.props?.mdxType;
      const isHeading = typeof mdxType === 'string' && /^h[2-6]$/.test(mdxType);

      if (isHeading) {
        if (currentStep) stepsData.push(currentStep);
        currentStep = {
          headingElement: child,
          descriptionElements: [],
        };
      } else if (currentStep) {
        currentStep.descriptionElements.push(child);
      }
    });
    if (currentStep) stepsData.push(currentStep);

    return stepsData.map(step => ({
      id: step.headingElement.props.id,
      title: step.headingElement.props.children,
      description: (
        <>
          {/* ✨ 核心变更 1: 更新隐形锚点的样式，使用绝对定位来创建偏移 */}
          {React.cloneElement(step.headingElement, {
            style: {
              position: 'absolute',
              top: `calc(-1 * var(--ifm-navbar-height))`, // 将其向上移动一个导航栏的高度
              visibility: 'hidden', // 仍然让它不可见
            },
          })}
          {step.descriptionElements}
        </>
      ),
    }));
  }, [children]);

  useEffect(() => {
    const hash = decodeURIComponent(location.hash.substring(1));
    if (hash) {
      const index = items.findIndex(item => item.id === hash);
      if (index !== -1 && index !== current) {
        setCurrent(index);
      }
    }
  }, [location.hash, items, current]);


  if (items.length === 0) { return null; }
  
  return (
    <Steps current={current} onChange={onChange} direction="vertical">
      {items.map((item) => (
        <Steps.Step
          key={item.id}
          className="stepper-step-item"
          title={item.title}
          description={item.description}
        />
      ))}
    </Steps>
  );
}
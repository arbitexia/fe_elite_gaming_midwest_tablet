import { useLayoutEffect, useRef, useState } from 'react';
import { UIFlexWrapBox } from '../UI';

export type UIWrapPanelProps = {
  itemSpacing: number;
  paddingY: number;
  children: React.ReactNode | React.ReactNode[];
};

export const UIWrapPanel = ({
  itemSpacing,
  paddingY,
  children,
}: UIWrapPanelProps) => {
  const ref = useRef(null);

  const [paddingX, setPaddingX] = useState(0);

  useLayoutEffect(() => {
    const updateLayout = () => {
      if (!ref.current) return;

      const current = ref.current as HTMLElement;
      if (!current.parentElement) return;

      const parent = current.parentElement as HTMLElement;

      let childWidth = 0;
      if (current.hasChildNodes()) {
        childWidth = (current.childNodes[0] as HTMLElement).offsetWidth;
      } else {
        return;
      }

      let count = 1;
      let padding = 0;
      let pl = parseInt(
        window.getComputedStyle(parent, null).getPropertyValue('padding-left')
      );
      let pr = parseInt(
        window.getComputedStyle(parent, null).getPropertyValue('padding-right')
      );

      while (
        childWidth * count + itemSpacing * (count - 1) <
        current.parentElement.offsetWidth - pl - pr
      ) {
        count++;
      }

      count--;
      padding =
        (current.parentElement.offsetWidth -
          pl -
          pr -
          childWidth * count -
          itemSpacing * (count - 1)) /
        2;
      setPaddingX(padding);
    };

    window.addEventListener('resize', updateLayout);

    updateLayout();

    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, []);
  return (
    <UIFlexWrapBox
      ref={ref}
      sx={{
        px: `${paddingX}px`,
        py: `${paddingY}px`,
        gap: `${itemSpacing}px`,
        justifyContent: 'left',
      }}
    >
      {children}
    </UIFlexWrapBox>
  );
};

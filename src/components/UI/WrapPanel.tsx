import { useEffect, useRef, useState } from 'react';
import { styled, Box } from '@mui/material';

export const UIWrapPanelBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

export type UIWrapPanelProps = {
  childWidth: number;
  py: number;
  gap: number;
  children: React.ReactNode | React.ReactNode[];
};

export const UIWrapPanel = ({
  childWidth,
  children,
  py,
  gap,
}: UIWrapPanelProps) => {
  const ref = useRef(null);

  const [px, setPx] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (!ref.current) return;
      const current = ref.current as HTMLElement;
      if (!current.parentElement) return;
      const parent = current.parentElement as HTMLElement;
      let count = 1;
      let padding = 0;
      let pl = parseInt(
        window.getComputedStyle(parent, null).getPropertyValue('padding-left')
      );
      let pr = parseInt(
        window.getComputedStyle(parent, null).getPropertyValue('padding-right')
      );
      console.log(pl, pr);
      while (
        childWidth * count + gap * (count - 1) <
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
          gap * (count - 1)) /
        2;
      setPx(padding);
    });

    return () => {
      window.removeEventListener('resize', () => {
        return;
      });
    };
  }, []);
  return (
    <UIWrapPanelBox
      ref={ref}
      sx={{ px: `${px}px`, py: `${py}px`, gap: `${gap}px` }}
    >
      {children}
    </UIWrapPanelBox>
  );
};

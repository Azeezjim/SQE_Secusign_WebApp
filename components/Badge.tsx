import { styled } from '@stitches/react';

const StyledBadge = styled('span', {
  fontSize: '12px' /* 14px */,
  lineHeight: '16px',
  padding: '0.25rem 0.5rem',
  borderRadius: '12px',
  variants: {
    status: {
      pending: {
        backgroundColor: '  rgba(234,179,8, 0.5)',
        color: '#854d0e',
      },
      completed: {
        backgroundColor: 'rgba(34,197,94,0.5)',
        color: '#166534',
      },
    },
  },
  defaultVariants: {
    status: 'pending',
  },
});

export default StyledBadge;

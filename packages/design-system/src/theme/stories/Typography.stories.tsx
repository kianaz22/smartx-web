import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Box } from '@mui/material';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

// Typography Variants Story
export const TypographyVariants: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gap: 3, p: 2 }}>
      {/* Display Variants */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Display Variants</Typography>
        <Typography variant="displayLarge" gutterBottom>نمایش بزرگ</Typography>
        <Typography variant="displayMedium" gutterBottom>نمایش متوسط</Typography>
        <Typography variant="displaySmall" gutterBottom>نمایش کوچک</Typography>
      </Box>

      {/* Headline Variants */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Headline Variants</Typography>
        <Typography variant="headlineLarge" gutterBottom>عنوان اصلی بزرگ</Typography>
        <Typography variant="headlineMedium" gutterBottom>عنوان اصلی متوسط</Typography>
        <Typography variant="headlineSmall" gutterBottom>عنوان اصلی کوچک</Typography>
      </Box>

      {/* Title Variants */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Title Variants</Typography>
        <Typography variant="titleLarge" gutterBottom>عنوان بزرگ</Typography>
        <Typography variant="titleMedium" gutterBottom>عنوان متوسط</Typography>
        <Typography variant="titleSmall" gutterBottom>عنوان کوچک</Typography>
      </Box>

      {/* Label Variants */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Label Variants</Typography>
        <Typography variant="labelLarge" gutterBottom>برچسب بزرگ</Typography>
        <Typography variant="labelMedium" gutterBottom>برچسب متوسط</Typography>
        <Typography variant="labelSmall" gutterBottom>برچسب کوچک</Typography>
      </Box>

      {/* Body Variants */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Body Variants</Typography>
        <Typography variant="bodyLarge" gutterBottom>متن اصلی بزرگ - این یک متن طولانی‌تر است تا استایل‌بندی و ارتفاع خط را نشان دهد.</Typography>
        <Typography variant="bodyMedium" gutterBottom>متن اصلی متوسط - این یک متن طولانی‌تر است تا استایل‌بندی و ارتفاع خط را نشان دهد.</Typography>
        <Typography variant="bodySmall" gutterBottom>متن اصلی کوچک - این یک متن طولانی‌تر است تا استایل‌بندی و ارتفاع خط را نشان دهد.</Typography>
        <Typography variant="bodyXSmall" gutterBottom>متن اصلی خیلی کوچک - این یک متن طولانی‌تر است تا استایل‌بندی و ارتفاع خط را نشان دهد.</Typography>
      </Box>
    </Box>
  ),
};

// Responsive Demo Story
export const ResponsiveDemo: Story = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>نمایش تایپوگرافی واکنش‌گرا</Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        اندازه پنجره مرورگر را تغییر دهید تا مقیاس تایپوگرافی از موبایل تا دسکتاپ را ببینید
      </Typography>

      <Box sx={{ display: 'grid', gap: 3, mt: 3 }}>
        <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
          <Typography variant="displayLarge" gutterBottom>نمایش بزرگ</Typography>
          <Typography variant="body2" color="text.secondary">
            موبایل: ۵۶ پیکسل • تبلت: ۴۸ پیکسل • دسکتاپ: ۵۶ پیکسل
          </Typography>
        </Box>

        <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
          <Typography variant="headlineLarge" gutterBottom>عنوان اصلی بزرگ</Typography>
          <Typography variant="body2" color="text.secondary">
            موبایل: ۳۲ پیکسل • تبلت: ۲۸ پیکسل • دسکتاپ: ۳۲ پیکسل
          </Typography>
        </Box>

        <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
          <Typography variant="titleLarge" gutterBottom>عنوان بزرگ</Typography>
          <Typography variant="body2" color="text.secondary">
            موبایل: ۲۰ پیکسل • تبلت: ۱۸ پیکسل • دسکتاپ: ۲۰ پیکسل
          </Typography>
        </Box>

        <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
          <Typography variant="bodyLarge" gutterBottom>متن اصلی بزرگ</Typography>
          <Typography variant="body2" color="text.secondary">
            موبایل: ۱۶ پیکسل • تبلت: ۱۵ پیکسل • دسکتاپ: ۱۶ پیکسل
          </Typography>
        </Box>
      </Box>
    </Box>
  ),
};

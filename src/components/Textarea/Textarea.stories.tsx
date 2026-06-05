import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    isError: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    resize: { control: 'select', options: ['none', 'vertical', 'horizontal', 'both'] },
    rows: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { placeholder: '내용을 입력하세요...' },
};

export const WithLabel: Story = {
  args: { label: '설명', placeholder: '자세한 설명을 입력해주세요', rows: 4 },
};

export const WithHelperText: Story = {
  args: {
    label: '자기소개',
    placeholder: '자신을 소개해주세요',
    helperText: '최대 500자까지 입력 가능합니다',
    rows: 5,
  },
};

export const Error: Story = {
  args: {
    label: '리뷰',
    placeholder: '리뷰를 작성해주세요',
    errorMessage: '리뷰를 입력해주세요 (최소 10자)',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성',
    value: '수정할 수 없는 내용입니다.',
    disabled: true,
  },
};

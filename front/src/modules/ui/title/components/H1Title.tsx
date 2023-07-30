import styled from '@emotion/styled';

type OwnProps = {
  title: string;
  fontColor?: H1TitleFontColor;
};

export enum H1TitleFontColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

const StyledTitle = styled.h2<{
  fontColor: H1TitleFontColor;
}>`
  color: ${({ theme, fontColor }) => theme.font.color[fontColor]};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  line-height: ${({ theme }) => theme.text.lineHeight.md};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export function H1Title({
  title,
  fontColor = H1TitleFontColor.Tertiary,
}: OwnProps) {
  return <StyledTitle fontColor={fontColor}>{title}</StyledTitle>;
}

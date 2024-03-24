import React from 'react';

type SectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionLayout = ({ children, className = '' }: SectionLayoutProps) => (
  <section className={className}>
    <section className='layout-content'>{children}</section>
  </section>
);

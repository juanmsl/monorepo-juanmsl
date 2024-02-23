import React from 'react';

type SectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionLayout = ({ children, className = '' }: SectionLayoutProps) => (
  <section className={className}>
    <div className='layout-content'>{children}</div>
  </section>
);

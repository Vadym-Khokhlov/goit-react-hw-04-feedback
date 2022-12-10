import React from 'react';
import { AppSection, SectionHeading } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <AppSection>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </AppSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

import React from 'react';
// ======= Styles ======
import cl from './SectionTextContent.module.scss';
// ======= Component ======
import SectionTitle, {ThemesVariant} from '../SectionTitle/SectionTitle';
import ContentText from '../SectionText/SectionText';

interface ISectionContent {
  contentText: { text: string }[],
  titleText: { shortTitle?: string, title: string },
}

const SectionContent: React.FC<ISectionContent> = ({ contentText, titleText}) => {
  return (
    <div className={cl.content}>

      <SectionTitle title={titleText.title} shortTitle={titleText.shortTitle} theme={ThemesVariant.darkTheme} />

      <ContentText content={contentText} />


    </div>
  );
};

export default SectionContent;